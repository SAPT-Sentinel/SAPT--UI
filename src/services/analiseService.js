//criar análise, editar resultados, baixar relatório
import axios from 'axios';

export async function criarAnalise(url) {
  const res = await axios.post(`http://localhost:8000/api/analise?url=${encodeURIComponent(url)}`);
  return res.data;
}

export async function editarResultado(resultadoId, passou, detalhes) {
  const res = await axios.put(`http://localhost:8000/api/resultados/${resultadoId}`, {
    passou,
    detalhes,
  });
  return res.data;
}
