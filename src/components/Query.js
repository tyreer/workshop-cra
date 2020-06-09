import { useEffect } from "react";
import { useSetState, usePrevious } from "../hooks/customHooks";
import isEqual from "lodash.isequal";

function useQuery({ query }) {
  const [state, setState] = useSetState({
    fetching: false,
    data: null,
    error: null,
  });

  const previousQuery = usePrevious(query);

  // TODO: Where does he create useDeepCompareEffect?
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

  return state;
}

const Query = ({ children, ...props }) => children(useQuery(props));

export default Query;
export { useQuery };
