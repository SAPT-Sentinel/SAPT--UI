import React, { useState } from "react";
import jsPDF from "jspdf"; // <-- novo
import autoTable from "jspdf-autotable";
import Sidebar from "../components/Sidebar";
import { gerarAnalise, editarResultado } from "../services/analiseService";
import { useNotification } from "../context/NotificationContext";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "../styles/analisePage.css";

const AgruparPorDominio = (resultados) => {
  const grupos = {};
  resultados.forEach((res) => {
    const dominio = res.criterio?.dominio || "Outros";
    if (!grupos[dominio]) grupos[dominio] = [];
    grupos[dominio].push(res);
  });
  return grupos;
};

const exportarPDF = (analise) => {
  if (!analise) return;

  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("Relatório de Avaliação", 14, 20);

  doc.setFontSize(12);
  doc.text(`URL Avaliada: ${analise.url_avaliada}`, 14, 30);
  doc.text(
    `Data da Análise: ${new Date(analise.data_analise).toLocaleString()}`,
    14,
    38
  );

  const grouped = AgruparPorDominio(analise.resultados);

  Object.entries(grouped).forEach(([dominio, criterios], index) => {
    const startY = doc.lastAutoTable ? doc.lastAutoTable.finalY + 10 : 48;
    autoTable(doc, {
      startY,
      head: [
        ["Código", "Critério", "Atendido", "Detalhes", "Referência Legal"],
      ],
      body: criterios.map((res) => [
        res.criterio.codigo,
        res.criterio.nome_criterio,
        res.passou ? "Sim" : "Não",
        res.detalhes || "-",
        res.criterio.descricao || "-",
      ]),
      theme: "striped",
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
      headStyles: {
        fillColor: [59, 91, 252],
        textColor: 255,
        fontStyle: "bold",
      },
      margin: { left: 14, right: 14 },
      didDrawPage: (data) => {
        if (index === 0 && data.pageCount === 1) {
          doc.setFontSize(13);
          doc.setTextColor(40);
          doc.text(dominio.toUpperCase(), 14, data.settings.startY - 6);
        } else {
          doc.setFontSize(13);
          doc.text(dominio.toUpperCase(), 14, data.settings.startY - 6);
        }
      },
    });
  });

  doc.save("relatorio-avaliacao.pdf");
};

export default function AnalisePage() {
  const [url, setUrl] = useState("");
  const [analise, setAnalise] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openCategorias, setOpenCategorias] = useState({});
  const { addNotification } = useNotification();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resultado = await gerarAnalise(url);
      setAnalise(resultado);
      setSnackbar({
        open: true,
        message: "Análise realizada com sucesso!",
        severity: "success",
      });
    } catch (err) {
      console.log(err);
      setSnackbar({
        open: true,
        message: "Erro ao realizar análise.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEditar = async (resId, passou, detalhes) => {
    try {
      const atualizado = await editarResultado(resId, passou, detalhes);
      setAnalise((prev) => ({
        ...prev,
        resultados: prev.resultados.map((r) =>
          r.id === resId ? atualizado : r
        ),
      }));
      addNotification("Critério atualizado com sucesso.", "success");
    } catch {
      addNotification("Erro ao atualizar critério.", "error");
    }
  };

  const toggleCategoria = (nome) => {
    setOpenCategorias((prev) => ({
      ...prev,
      [nome]: !prev[nome],
    }));
  };

  const resultadosAgrupados = analise
    ? AgruparPorDominio(analise.resultados)
    : {};

  return (
    <div className="analise">
      <Sidebar />
      <div className="analise-content">
        <div className="header-container">
          <div>
            <h1>Realizar Avaliação</h1>
            <p className="subtext">
              Insira abaixo a URL do portal para iniciar a avaliação
            </p>
          </div>
          <button className="exportar-btn" onClick={() => exportarPDF(analise)}>
            <span className="export-icon">↓</span> Exportar PDF
          </button>
        </div>

        <div className="search-container">
          <form className="analise-form" onSubmit={handleSubmit}>
            <div className="url-input-container">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                value={url}
                placeholder="Insira a URL do portal"
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={loading} className="analisar-btn">
              {loading ? <span className="loading-spinner"></span> : "Analisar"}
            </button>
          </form>
        </div>

        {analise && (
          <div className="resultados">
            <h2>Dimensões da avaliação</h2>
            {Object.entries(resultadosAgrupados).map(([dominio, criterios]) => {
              const total = criterios.length;
              const atendidos = criterios.filter((c) => c.passou).length;
              const aberto = openCategorias[dominio] || false;

              return (
                <div key={dominio} className="categoria-container">
                  <div
                    className="categoria-header"
                    onClick={() => toggleCategoria(dominio)}
                  >
                    <span>{dominio}</span>
                    <span className="categoria-status">
                      {atendidos}/{total} ▾
                    </span>
                  </div>

                  {aberto && (
                    <div className="criterios-list">
                      {criterios.map((res) => (
                        <div key={res.id} className="criterio-item">
                          <div className="criterio-checkbox">
                            <label className="checkbox-container">
                              <input
                                type="checkbox"
                                checked={res.passou}
                                onChange={(e) =>
                                  handleEditar(
                                    res.id,
                                    e.target.checked,
                                    res.detalhes
                                  )
                                }
                              />
                              <span className="checkmark"></span>
                              <span className="criterio-text">
                                <strong>
                                  {res.criterio.codigo} -{" "}
                                  {res.criterio.nome_criterio}
                                </strong>
                              </span>
                            </label>
                          </div>
                          <input
                            type="text"
                            className="justificativa-input"
                            defaultValue={res.detalhes}
                            placeholder="Adicionar justificativa..."
                            onBlur={(e) =>
                              handleEditar(res.id, res.passou, e.target.value)
                            }
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            severity={snackbar.severity}
            sx={{ width: "100%" }}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
