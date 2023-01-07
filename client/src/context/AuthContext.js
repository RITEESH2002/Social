import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:{
  _id: "638c8191fcbc7d430f1e00e8",
  username: "PRAVEEN",
  email: "praveen@gmail.com",
  profilePicture: "",
  coverPicture: "",
  followers: [],
  following: [],
  isAdmin: false,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // useReducer returns an array that holds the current state value and a
  // dispatch function to which you can pass an action and later invoke it

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
  );
};
