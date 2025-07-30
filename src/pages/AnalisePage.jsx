import React, { useState } from 'react';
import Sidebar from '../components/sideBar';
import { criarAnalise, editarResultado } from '../services/analiseService';
import '../styles/analisePage.css';

const AgruparPorCategoria = (resultados) => {
    const grupos = {};
    resultados.forEach((res) => {
        const categoria = res.categoria || 'Outros';
        if (!grupos[categoria]) grupos[categoria] = [];
        grupos[categoria].push(res);
    });
    return grupos;
};

export default function AnalisePage() {
    const [url, setUrl] = useState('');
    const [analise, setAnalise] = useState(null);
    const [loading, setLoading] = useState(false);
    const [openCategorias, setOpenCategorias] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const resultado = await criarAnalise(url);
            setAnalise(resultado);
        } catch (err) {
            alert("Erro ao criar análise.");
        }
        setLoading(false);
    };

    const handleEditar = async (resId, passou, detalhes) => {
        try {
            const atualizado = await editarResultado(resId, passou, detalhes);
            setAnalise((prev) => ({
                ...prev,
                resultados: prev.resultados.map((r) => r.id === resId ? atualizado : r)
            }));
        } catch {
            alert("Erro ao atualizar critério.");
        }
    };

    const toggleCategoria = (nome) => {
        setOpenCategorias((prev) => ({
            ...prev,
            [nome]: !prev[nome]
        }));
    };

    const exportarPDF = () => {
        alert("Exportação de PDF ainda não implementada.");
    };

    const resultadosAgrupados = analise ? AgruparPorCategoria(analise.resultados) : {};

    return (
        <div className="analise">
            <Sidebar />
            <div className="analise-content">
                <div className="header-container">
                    <div>
                        <h1>Realizar Avaliação</h1>
                        <p className="subtext">Insira abaixo a URL do portal para iniciar a avaliação</p>
                    </div>
                    <button className="exportar-btn" onClick={exportarPDF}>
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
                            {loading ? (
                                <span className="loading-spinner"></span>
                            ) : (
                                'Analisar'
                            )}
                        </button>
                    </form>
                </div>

                {analise && (
                    <div className="resultados">
                        <h2>Dimensões da avaliação</h2>

                        {Object.entries(resultadosAgrupados).map(([categoria, criterios]) => {
                            const total = criterios.length;
                            const atendidos = criterios.filter((c) => c.passou).length;
                            const aberto = openCategorias[categoria] || false;

                            return (
                                <div key={categoria} className="categoria-container">
                                    <div
                                        className="categoria-header"
                                        onClick={() => toggleCategoria(categoria)}
                                    >
                                        <span>{categoria}</span>
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
                                                                onChange={(e) => handleEditar(res.id, e.target.checked, res.detalhes)}
                                                            />
                                                            <span className="checkmark"></span>
                                                            <span className="criterio-text">{res.criterio}</span>
                                                        </label>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="justificativa-input"
                                                        defaultValue={res.detalhes}
                                                        placeholder="Adicionar justificativa..."
                                                        onBlur={(e) => handleEditar(res.id, res.passou, e.target.value)}
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
            </div>
        </div>
    );
}