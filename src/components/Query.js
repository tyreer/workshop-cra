import { useReducer, useEffect } from "react";

function Query({ query, children }) {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { loaded: false, fetching: false, data: null, error: null }
  );

  useEffect(() => {
    setState({ fetching: true });
    fetch(query)
      .then((res) => res.json())
      .then((res) => {
        setState({
          data: res,
          error: null,
          loaded: true,
          fetching: false,
        });
      })
      .catch((error) =>
        setState({ error, data: null, loaded: false, fetching: false })
      );
  }, [query]);

  return children(state);
}

export default Query;
