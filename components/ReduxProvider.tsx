'use client'; // Ensure this is treated as a client component

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/app/store';

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
