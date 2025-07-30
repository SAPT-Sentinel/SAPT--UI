import axios from "axios";

export async function gerarAnalise(url) {
  const res = await axios.post("https://sapt-api.onrender.com/api/analise", {
    url: url,
  });
  return res.data;
}

export async function editarResultado(resultadoId, passou, detalhes) {
  const res = await axios.put(
    `https://sapt-api.onrender.com/api/resultados/${resultadoId}`,
    {
      passou,
      detalhes,
    }
  );
  return res.data;
}
