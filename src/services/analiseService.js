import api from "./api"; // ou onde você definiu isso

export async function gerarAnalise(url) {
  const res = await api.post("/api/analise", { url });
  return res.data;
}

export async function editarResultado(resultadoId, passou, detalhes) {
  const res = await api.put(`/api/resultados/${resultadoId}`, {
    passou,
    detalhes,
  });
  return res.data;
}
