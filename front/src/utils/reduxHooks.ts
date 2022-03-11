import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/redusers";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;