import { useEffect } from "react";
import { useSetState, usePrevious } from "../hooks/customHooks";
import isEqual from "lodash.isequal";

function Query({ query, children }) {
  const [state, setState] = useSetState({
    fetching: false,
    data: null,
    error: null,
  });

  const previousQuery = usePrevious(query);

  useEffect(() => {
    if (isEqual(previousQuery, query)) {
      return;
    }
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
  });

  return children(state);
}

export default Query;
