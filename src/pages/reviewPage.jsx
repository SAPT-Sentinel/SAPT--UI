import { useState } from 'react';
import Sidebar from '../components/sideBar';
import HeaderMobile from '../components/HeaderMobile';
import { useMediaQuery } from '../hooks/useMediaQuery';
import '../styles/ReviewPage.css';
import DimensaoReceitas from '../components/dimensoes/Receitas';
import DimensaoDespesas from '../components/dimensoes/Despesas';
import DimensaoPlanejamento from '../components/dimensoes/PlanejamentoPrestacaoContas';


export default function RealizarAvaliacaoPage() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [portalUrl, setPortalUrl] = useState('');
    const [urlValida, setUrlValida] = useState(false);

    const handleUrlChange = (e) => {
        const value = e.target.value;
        setPortalUrl(value);
        setUrlValida(value.trim() !== ''); // simples: considera válido se tiver texto
    };

    return (
        <div className="avaliacao-page">
            {isMobile ? <HeaderMobile /> : <Sidebar />}
            <div className="avaliacao-content">
                <header className="avaliacao-header">
                    <div className="avaliacao-header-top">
                        <h1>Realizar Avaliação</h1>
                        <button className="exportar-pdf-btn">EXPORTAR PDF</button>
                    </div>
                    <p>Insira abaixo a URL do portal para iniciar a avaliação</p>
                    <input
                        type="text"
                        placeholder="Enter portal URL"
                        className="input-url"
                        value={portalUrl}
                        onChange={handleUrlChange}
                    />
                </header>
                <section className="dimensoes-section">
                    <h2>Dimensões da avaliação</h2>

                    {/* Aba 1 - RECEITAS */}
                    <div className={`dimensao-card ${urlValida ? 'ativa' : 'desativada'}`}>
                        <div className="dimensao-header">
                            <span>Receitas</span>
                            <span>0/3 ▾</span>
                        </div>

                        {urlValida && <DimensaoReceitas />}
                    </div>



                    {/* Aba 2 - DESPESAS */}
                    <div className={`dimensao-card ${urlValida ? 'ativa' : 'desativada'}`}>
                        <div className="dimensao-header">
                            <span>Despesas</span>
                            <span>0/6 ▾</span>
                        </div>
                        {urlValida && <DimensaoDespesas />}
                    </div>

                    {/* Aba 3 - PLANEJAMENTO */}
                    <div className={`dimensao-card ${urlValida ? 'ativa' : 'desativada'}`}>
                        <div className="dimensao-header">
                            <span>Planejamento e Prestação de contas</span>
                            <span>0/19 ▾</span>
                        </div>
                        {urlValida && <DimensaoPlanejamento />}
                    </div>

                </section>
            </div>
        </div>
    );
}
