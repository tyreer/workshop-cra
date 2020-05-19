import { useReducer, useEffect } from "react";

function BrokeQuery({ query, children }) {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { fetching: false, data: null, error: null }
  );

  useEffect(() => {
    setState({ fetching: true });
    fetch(query.url, query.init)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not 2xx response");
        }
        return res.json();
      })
      .then((res) => {
        setState({
          data: res,
          error: null,
          fetching: false,
        });
      })
      .catch((error) =>
        setState({ error: error.message, data: null, fetching: false })
      );
  }, [query]);

  return children(state);
}

export default BrokeQuery;
