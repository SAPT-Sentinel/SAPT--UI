import React from 'react';

export default function DimensaoReceitas() {
  return (
    <div className="criterio-content">
      {/* Critério 3.1 */}
      <div className="criterio-bloco">
        <p><strong>3.1:</strong> Divulga as receitas do Poder do órgão, evidenciando sua previsão e realização?</p>

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

      {/* Critério 3.2 */}
      <div className="criterio-bloco">
        <p><strong>3.2:</strong> Disponibiliza os valores de todas as receitas recebidas, incluindo transferências voluntárias e legais?</p>

        <div className="status-atual">
          Status atual: <span className="status-tag nao-atende">não atende</span>
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

      {/* Critério 3.3 */}
      <div className="criterio-bloco">
        <p><strong>3.3:</strong> Apresenta as receitas em linguagem clara e acessível à população?</p>

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
    </div>
  );
}
