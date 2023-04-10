import { createStackNavigator } from '@react-navigation/stack';
import React, { useMemo } from 'react';
import { NavigationRoutes } from '../constants';
import { TestingComponentScreen } from '../modules';
import { NavigationContainer } from './router';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: ['/'],
          config: {
            screens: {
              [NavigationRoutes.Home]: 'home',
              [NavigationRoutes.Details]: 'details',
              [NavigationRoutes.TestingComponent]: 'testing-component',
              [NavigationRoutes.BottomTabs]: 'bottom-tabs',
              [NavigationRoutes.HomeStackContainer]: 'home-stack-container',
              [NavigationRoutes.ActionsStackContainer]:
                'actions-stack-container',
              [NavigationRoutes.MeetingStackContainer]:
                'meeting-stack-container',
              [NavigationRoutes.ProfileStackContainer]:
                'profile-stack-container',
              [NavigationRoutes.Actions]: 'actions',
              [NavigationRoutes.Meeting]: 'meeting',
              [NavigationRoutes.Profile]: 'profile',
            },
          },
        }),
        [],
      )}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={NavigationRoutes.TestingComponent}
          component={TestingComponentScreen}
        />
        <Stack.Screen
          name={NavigationRoutes.BottomTabs}
          component={TabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
