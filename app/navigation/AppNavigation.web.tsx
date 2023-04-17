import React, { type FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationRoutes } from '../constants';
import {
  HomeScreen,
  DetailsScreen,
  TestingComponentScreen,
  SplashScreen,
  LoginScreen,
} from '../modules';
import ProjectsScreen from '../modules/Projects';
import TabNavigation from './TabNavigation';

// import your route components too

const AppNavigation: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginScreen />} />
        <Route path={NavigationRoutes.BottomTabs} element={<TabNavigation />} />
        <Route path={NavigationRoutes.Details} element={<ProjectsScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppNavigation;
