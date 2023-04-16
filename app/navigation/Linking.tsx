import AsyncStorage from '@react-native-async-storage/async-storage';
import { type LinkingOptions } from '@react-navigation/native';
import { Linking } from 'react-native';
import { AppConstants, NavigationRoutes } from '../constants';

const config = {
  screens: {
    [NavigationRoutes.Home]: 'home',
    [NavigationRoutes.Details]: 'details',
    [NavigationRoutes.TestingComponent]: 'testing-component',
    [NavigationRoutes.BottomTabs]: 'bottom-tabs',
    [NavigationRoutes.HomeStackContainer]: 'home-stack-container',
    [NavigationRoutes.ActionsStackContainer]: 'actions-stack-container',
    [NavigationRoutes.MeetingStackContainer]: 'meeting-stack-container',
    [NavigationRoutes.ProfileStackContainer]: 'profile-stack-container',
    [NavigationRoutes.Actions]: 'actions',
    [NavigationRoutes.Meeting]: 'meeting',
    [NavigationRoutes.Profile]: 'profile',
    [NavigationRoutes.Login]: 'login',
    [NavigationRoutes.SplashScreen]: 'splash-screen',
    [NavigationRoutes.Task]: 'task',
  },
};

export function getLinkConfiguration(): LinkingOptions<Object> {
  const linking = {
    enabled: true,
    prefixes: ['promanage://'],
    subscribe(listener: any) {
      const linkingSubscription = Linking.addEventListener('url', ({ url }) => {
        const redirectUrl = url.split('?')[0];
        const authToken = url.split('?')[1].split('&')[0].split('=')[1];
        AsyncStorage.setItem(AppConstants.AUTH_TOKEN, authToken).then(() => {
          listener(redirectUrl);
        });
      });
      return () => {
        // Clean up the event listeners
        linkingSubscription.remove();
      };
    },
    config,
  };
  return linking as LinkingOptions<Object>;
}
