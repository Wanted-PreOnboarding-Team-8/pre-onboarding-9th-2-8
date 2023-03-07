import { store } from '@/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
