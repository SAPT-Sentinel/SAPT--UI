import { useMemo } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

// Função auxiliar para converter query string em objeto
const parseQueryString = (search) => {
  const params = new URLSearchParams(search);
  const result = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
};

// Função auxiliar para construir query string de um objeto
const buildQueryString = (queryObj) => {
  const params = new URLSearchParams(queryObj);
  return params.toString();
};

export function useRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const router = useMemo(() => {
    return {
      // Navegação padrão
      back: () => navigate(-1),
      forward: () => navigate(1),
      refresh: () => navigate(0),

      // Navegar com push
      push: (path, query = {}, state = {}) => {
        const queryString = buildQueryString(query);
        const fullPath = queryString ? `${path}?${queryString}` : path;
        navigate(fullPath, { state });
      },

      // Navegar com replace
      replace: (path, query = {}, state = {}) => {
        const queryString = buildQueryString(query);
        const fullPath = queryString ? `${path}?${queryString}` : path;
        navigate(fullPath, { replace: true, state });
      },

      // Localização atual
      pathname: location.pathname,
      search: location.search,
      query: parseQueryString(location.search),
      params,

      // Estado da navegação (passado via navigate(path, { state }))
      state: location.state,
    };
  }, [navigate, location, params]);

  return router;
}
