import { useContext } from "react";

import { AuthContent, AuthContextDataProps } from "../context/AuthContext";

export function useAuth(): AuthContextDataProps {
  const context = useContext(AuthContent);
  return context;
}
