import { createContext } from 'react';

import { MiddlewareContextType } from './types';

export const MiddlewareContext = createContext<MiddlewareContextType>({
  linking: {},
});
