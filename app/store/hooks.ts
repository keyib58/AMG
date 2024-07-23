// store/hooks.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';

// Custom hook to use the dispatch function
export const useAppDispatch = () => useDispatch<AppDispatch>();
// Custom hook to use the selector function with typed RootState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
