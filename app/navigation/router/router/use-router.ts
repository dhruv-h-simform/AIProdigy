import {
  getActionFromState,
  getStateFromPath,
  StackActions,
} from '@react-navigation/native';
import { useContext, useMemo } from 'react';
import { Platform } from 'react-native';
import type { To } from 'react-router-dom';
import { MiddlewareContext } from '../middleware/context';
import { useNavigation } from './use-navigation';
import { useReactRouter } from './use-react-router';

export function useRouter() {
  const navigation = useNavigation();
  const navigate = useReactRouter();

  const linking = useContext(MiddlewareContext).linking;

  return useMemo(
    () => ({
      push: (to: To & string, params?: any) => {
        if (Platform.OS === 'web') {
          navigate?.(to, {
            state: params,
          });
        } else {
          if (to) {
            const { config } = linking;

            const state = linking?.getStateFromPath
              ? linking.getStateFromPath(to, config)
              : getStateFromPath(to, config);

            if (state) {
              const action = getActionFromState(state, config);

              if (action !== undefined) {
                if (
                  'payload' in action &&
                  action.payload &&
                  'name' in action.payload &&
                  action.payload.name
                ) {
                  const { name, params } = action.payload;
                  navigation?.dispatch(StackActions.push(name, params));
                } else {
                  navigation?.dispatch(action);
                }
              }
            }
          }
        }
      },
      navigate: (to: To & string, params?: any) => {
        if (Platform.OS === 'web') {
          navigate?.(to, {
            state: params,
          });
        } else {
          if (to) {
            const { config } = linking;

            const state = linking?.getStateFromPath
              ? linking.getStateFromPath(to, config)
              : getStateFromPath(to, config);

            if (state) {
              const action = getActionFromState(state, config);
              if (action !== undefined) {
                if (
                  'payload' in action &&
                  action.payload &&
                  'name' in action.payload &&
                  action.payload.name
                ) {
                  const { name } = action.payload;
                  navigation?.navigate(name, params);
                } else {
                  navigation?.dispatch(action);
                }
              }
            }
          }
        }
      },
      replace: (to: To & string, params?: any) => {
        if (Platform.OS === 'web') {
          navigate?.(to, { state: params, replace: true });
        } else {
          if (to) {
            const { config } = linking;

            const state = linking?.getStateFromPath
              ? linking.getStateFromPath(to, config)
              : getStateFromPath(to, config);

            if (state) {
              const action = getActionFromState(state, config);
              if (action !== undefined) {
                if (
                  'payload' in action &&
                  action.payload &&
                  'name' in action.payload &&
                  action.payload.name
                ) {
                  const { name } = action.payload;
                  navigation?.dispatch(StackActions.replace(name, params));
                } else {
                  navigation?.dispatch(action);
                }
              } else {
                navigation?.reset(state);
              }
            }
          }
        }
      },
      reset: (to: To & string, params?: any) => {
        if (Platform.OS === 'web') {
          navigate?.(to, { state: params, replace: true });
        } else {
          if (to) {
            const { config } = linking;

            const state = linking?.getStateFromPath
              ? linking.getStateFromPath(to, config)
              : getStateFromPath(to, config);

            if (state) {
              navigation?.reset(state);
            }
          }
        }
      },
      pop: (screen: number = 1) => {
        if (Platform.OS === 'web') {
          navigate?.(-screen);
        } else {
          navigation?.dispatch(StackActions.pop(screen));
        }
      },
      back: () => {
        if (Platform.OS === 'web') {
          navigate?.(-1);
        } else {
          navigation?.goBack();
        }
      },
      toggleDrawer: () => {
        if (Platform.OS === 'web') {
          return;
        } else {
          navigation?.toggleDrawer();
        }
      },
    }),
    [linking, navigate, navigation],
  );
}
