// src/components/dimensoes/Despesas.jsx
import React from 'react';

export default function DimensaoDespesas() {
  return (
    <div className="criterio-content">
      {/* Critério 2.1 */}
      <div className="criterio-bloco">
        <p><strong>2.1:</strong> Divulga o total das despesas empenhadas, liquidadas e pagas?</p>
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

      {/* Critério 2.2 */}
      <div className="criterio-bloco">
        <p><strong>2.2:</strong> Divulga as despesas por classificação orçamentária?</p>
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

      {/* Critério 2.3 */}
      <div className="criterio-bloco">
        <p><strong>2.3:</strong> Possibilita a consulta de empenhos com os detalhes do beneficiário do pagamento ou credor, o bem fornecido ou serviço prestado e a identificação do procedimento licitatório originário da despesa?</p>
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

      {/* Critério 2.4 */}
      <div className="criterio-bloco">
        <p><strong>2.4:</strong> Publica relação das despesas com aquisições de bens efetuadas pela instituição contendo: identificação do bem, preço unitário, quantidade, nome do fornecedor e valor total de cada aquisição?</p>
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

      {/* Critério 2.5 */}
      <div className="criterio-bloco">
        <p><strong>2.5:</strong> Publica informações sobre despesas de patrocínio?</p>
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

      {/* Critério 2.6 */}
      <div className="criterio-bloco">
        <p><strong>2.6:</strong> Publica informações detalhadas sobre a execução dos contratos de publicidade, com nomes dos fornecedores de serviços especializados e veículos, bem como informações sobre os totais de valores pagos para cada tipo de serviço e meio de divulgação?</p>
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
