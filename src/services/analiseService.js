import axios from "axios";

export async function gerarAnalise(url) {
  const res = await axios.post("http://localhost:8000/api/analise", {
    url: url,
  });
  return res.data;
}

export async function editarResultado(resultadoId, passou, detalhes) {
  const res = await axios.put(
    `http://localhost:8000/api/resultados/${resultadoId}`,
    {
      passou,
      detalhes,
    }
  );
  return res.data;
}
