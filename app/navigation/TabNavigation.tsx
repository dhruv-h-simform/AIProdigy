import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, useColorMode, type ITextProps } from 'native-base';
import React from 'react';
import { icons } from '../assets';
import { CustomTabIcon } from '../components';
import { NavigationRoutes, Strings } from '../constants';
import {
  ActionsScreen,
  CreateUserStories,
  HomeScreen,
  MeetingScreen,
  ProfileScreen,
  TasksScreen,
} from '../modules';
import ProjectsScreen from '../modules/Projects';
import styles from './styles/TabNavigationStyles';
import CreateProjectScreen from '../modules/CreateProject';
import AddUsersScreen from '../modules/AddUsers';

interface CustomTabTextProps extends ITextProps {
  focused?: boolean;
  title: string;
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStackContainer = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NavigationRoutes.Home} component={HomeScreen} />

      <Stack.Screen
        name={NavigationRoutes.Details}
        component={ProjectsScreen}
      />
      <Stack.Screen
        name={NavigationRoutes.CreateProjectScreen}
        component={CreateProjectScreen}
      />
      <Stack.Screen name={NavigationRoutes.Task} component={TasksScreen} />
      <Stack.Screen
        name={NavigationRoutes.AddUsers}
        component={AddUsersScreen}
      />
      <Stack.Screen
        name={NavigationRoutes.UserStories}
        component={CreateUserStories}
      />
    </Stack.Navigator>
  );
};

const ActionsStackContainer = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NavigationRoutes.Actions} component={ActionsScreen} />
    </Stack.Navigator>
  );
};

const MeetingStackContainer = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NavigationRoutes.Meeting} component={MeetingScreen} />
    </Stack.Navigator>
  );
};

const ProfileStackContainer = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NavigationRoutes.Profile} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export const CustomTabText = ({
  focused,
  title,
  ...rest
}: CustomTabTextProps) => (
  <Text
    fontSize={[13, 25]}
    variant={'semi-bold'}
    mt={3}
    _important={{
      _dark: { color: 'app.white.light' },
      _light: {
        color: 'app.white.light',
      },
    }}
    {...rest}>
    {title}
  </Text>
);

const TabNavigation = () => {
  const { colorMode } = useColorMode();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle:
          colorMode === 'light'
            ? {
                ...styles.container,
              }
            : {
                ...styles.containerDark,
              },
        tabBarIconStyle: styles.iconStyle,
      }}>
      <Tab.Screen
        name={NavigationRoutes.HomeStackContainer}
        component={HomeStackContainer}
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomTabText focused={focused} title={Strings.Home} />
          ),
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon focused={focused} icon={icons.home} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationRoutes.ActionsStackContainer}
        component={ActionsStackContainer}
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomTabText focused={focused} title={Strings.Actions} />
          ),
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon focused={focused} icon={icons.actions} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationRoutes.MeetingStackContainer}
        component={MeetingStackContainer}
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomTabText focused={focused} title={Strings.Meeting} />
          ),
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon focused={focused} icon={icons.meeting} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationRoutes.ProfileStackContainer}
        component={ProfileStackContainer}
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomTabText focused={focused} title={Strings.Profile} />
          ),
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon focused={focused} icon={icons.profile} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
