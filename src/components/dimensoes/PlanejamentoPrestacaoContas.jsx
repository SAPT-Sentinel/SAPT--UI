// src/components/dimensoes/DimensaoPlanejamento.jsx
import React from 'react';

export default function DimensaoPlanejamento() {
  const criterios = [
    "3.1 Publica a Prestação de Contas do Ano Anterior (Balanço Geral)?",
    "3.2 Divulga o Relatório de Gestão ou Atividades?",
    "3.3 Divulga a íntegra da decisão da apreciação ou julgamento das contas pelo Tribunal de Contas?",
    "3.4 Divulga o resultado do julgamento das Contas do Chefe do Poder Executivo pelo Poder Legislativo?",
    "3.5 Divulga o Relatório de Gestão Fiscal (RGF)?",
    "3.6 Divulga o Relatório Resumido da Execução Orçamentária (RREO)?",
    "3.7 Divulga o plano estratégico institucional?",
    "3.8 Divulga a Lei do Plano Plurianual (PPA) e seus anexos?",
    "3.9 Divulga a Lei de Diretrizes Orçamentárias (LDO) e seus anexos?",
    "3.10 Divulga a Lei Orçamentária (LOA) e seus anexos?",
    "3.11 Divulga o Orçamento do Consórcio Público onde conste a estimativa da receita e a fixação da despesa para o exercício atual?",
    "3.12 Divulga as demonstrações financeiras trimestrais?",
    "3.13 Divulga as demonstrações financeiras (contábeis) acompanhadas dos pareceres do Conselho Fiscal e da auditoria independente?",
    "3.14 Pública o Orçamento de Investimentos da instituição que compõe a Lei Orçamentária Anual?",
    "3.15 Divulga as demonstrações contábeis auditadas em formato eletrônico editável?",
    "3.16 Divulga o relatório anual elaborado pelo Comitê de Auditoria Estatutário com informações sobre as atividades e os resultados e suas conclusões e recomendações?",
    "3.17 Divulga as atas das reuniões do Comitê de Auditoria Estatutário?",
    "3.18 Divulga as atas das reuniões do Comitê de Elegibilidade Estatutário ou Comitê de Pessoas, Elegibilidade, Sucessão e Remuneração a partir de 2022?",
    "3.19 Divulga anualmente relatório integrado ou de sustentabilidade?"
  ];

  return (
    <div className="criterio-content">
      {criterios.map((texto, index) => (
        <div className="criterio-bloco" key={index}>
          <p><strong>{texto.split(' ')[0]}:</strong> {texto.slice(texto.indexOf(' ') + 1)}</p>

          <div className="status-atual">
            Status atual: <span className="status-tag atende">atende</span>
          </div>

          <div className="mudar-status">
            <label>Mudar Status:</label>
            <div className="status-btns">
              <button className="status-opcao">Atende</button>
              <button className="status-opcao">Não Atende</button>
            </div>
          </div>

          <div className="justificativa">
            <label>Justificativa:</label>
            <textarea placeholder="Digite sua justificativa..."></textarea>
          </div>

          <div className="upload-evidencia">
            <label>Upload de evidência:</label>
            <div className="upload-box">
              <p>arraste o seu arquivo aqui ou</p>
              <button className="upload-btn">Upload</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
