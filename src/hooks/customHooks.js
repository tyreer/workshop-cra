import { useReducer, useEffect, useRef } from "react";

export function useSetState(initialState) {
  return useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  );
}

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
