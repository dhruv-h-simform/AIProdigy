import {
  LinkingOptions, NavigationContainer as MobileNavigationContainer
} from '@react-navigation/native';
import React from 'react';
import { MiddlewareContext } from './context';
import { MiddlewareContextType } from './types';

type Props = {
  linking: LinkingOptions<any>;
} & MiddlewareContextType;

export function NavigationContainer({
  children,
  linking,
  ...rest
}: { children: React.ReactNode } & Props) {
  return (
    <MiddlewareContext.Provider value={{ linking }}>
      <MobileNavigationContainer linking={linking} {...rest}>
        {children}
      </MobileNavigationContainer>
    </MiddlewareContext.Provider>
  );
}
