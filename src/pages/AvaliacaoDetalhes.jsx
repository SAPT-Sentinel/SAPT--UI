import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import HeaderMobile from "../components/HeaderMobile";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { getAnalisePorId } from "../services/analiseService";
import "../styles/analisePage.css";

const agruparPorDominio = (resultados) => {
  const grupos = {};
  resultados.forEach((res) => {
    const dominio = res.criterio.dominio || "Outros";
    if (!grupos[dominio]) grupos[dominio] = [];
    grupos[dominio].push(res);
  });
  return grupos;
};

export default function AvaliacaoDetalhes() {
  const { id } = useParams();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [analise, setAnalise] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [open, setOpen] = useState({});

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getAnalisePorId(id);
        setAnalise(data);
      } catch (err) {
        console.log(err);
        setErro("Erro ao carregar análise.");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  const toggleGrupo = (dominio) => {
    setOpen((prev) => ({ ...prev, [dominio]: !prev[dominio] }));
  };

  const agrupados = analise ? agruparPorDominio(analise.resultados) : {};

  return (
    <div className="analise">
      {isMobile ? <HeaderMobile /> : <Sidebar />}
      <div className="analise-content">
        <h1>Detalhes da Avaliação</h1>

        {loading && <p>Carregando...</p>}
        {erro && <p style={{ color: "red" }}>{erro}</p>}

        {analise && (
          <>
            <p className="subtext">
              Avaliação de: <strong>{analise.url_avaliada}</strong>
              <br />
              Realizada em:{" "}
              {new Date(analise.data_analise).toLocaleDateString()}
            </p>

            <div className="resultados">
              <h2>Dimensões da avaliação</h2>
              {Object.entries(agrupados).map(([dominio, lista]) => {
                const total = lista.length;
                const atendidos = lista.filter((r) => r.passou).length;
                const aberto = open[dominio];

                return (
                  <div className="categoria-container" key={dominio}>
                    <div
                      className="categoria-header"
                      onClick={() => toggleGrupo(dominio)}
                    >
                      <span>{dominio}</span>
                      <span className="categoria-status">
                        {atendidos}/{total} ▾
                      </span>
                    </div>

                    {aberto && (
                      <div className="criterios-list">
                        {lista.map((r) => (
                          <div className="criterio-item" key={r.id}>
                            <label className="checkbox-container">
                              <input
                                type="checkbox"
                                checked={r.passou}
                                readOnly
                              />
                              <span className="checkmark"></span>
                              <span className="criterio-text">
                                {r.criterio.nome_criterio}
                              </span>
                            </label>
                            <input
                              type="text"
                              className="justificativa-input"
                              value={r.detalhes}
                              readOnly
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
