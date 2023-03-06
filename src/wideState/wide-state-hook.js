import { useEffect, useState } from "react";

let globalState = {};
let actions = {};
let listeners = [];

export const useStore = (shoudListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifer, payload) => {
    const newState = actions[actionIdentifer](globalState, payload);

    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shoudListen) {
      listeners.push(setState);
    }
    return () => {
      if (shoudListen) {
        listeners = listeners.filter((e) => e !== setState);
      }
    };
  }, [shoudListen, setState]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
