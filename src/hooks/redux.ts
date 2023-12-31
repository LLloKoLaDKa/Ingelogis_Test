import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AddDispatch, RootState } from "../store/store";

export const useAppDispatch = () => useDispatch<AddDispatch>();
export const useAppSelection: TypedUseSelectorHook<RootState> = useSelector;