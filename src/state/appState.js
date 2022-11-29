import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

const AppStateContext = createContext({});
const initialState = {
    theme: 'light',
    drawer: false
};
export const useAppState = () => useContext(AppStateContext);

function reducer(state, action) {
  switch (action.type) {
    case 'drawer':
        return { ...state, drawer: !state.drawer }
    case "theme-switch":
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      throw new Error();
  }
}

function AppState({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };



  return (
      <AppStateContext.Provider value={value}>
            {children}
        </AppStateContext.Provider>
  );
}

export default AppState;
