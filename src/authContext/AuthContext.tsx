import AuthReducer from "./AuthReducer"
import {createContext, Dispatch, ReactNode, useEffect, useReducer} from "react"

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user") as string) || null,
  isFetching: false,
  error: false,
}

export type InitialStateType = {
  user: string | null
  isFetching: boolean,
  error: boolean,
  dispatch?: Dispatch<any>
}

export const AuthContext = createContext<InitialStateType>(INITIAL_STATE)

export const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user])

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}