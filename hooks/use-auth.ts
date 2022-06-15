import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
export const useAuth = () => {
  const state = useSelector((state: RootState) => state.auth.value);
  const user = useMemo(() => state, [state]);
  return user;
};
