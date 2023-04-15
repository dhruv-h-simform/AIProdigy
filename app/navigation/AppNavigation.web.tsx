import React, { type FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationRoutes } from '../constants';
import { HomeScreen, DetailsScreen, TestingComponentScreen } from '../modules';
import ProjectsScreen from '../modules/Projects';

// import your route components too

const AppNavigation: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TestingComponentScreen />} />
        <Route
          path={NavigationRoutes.TestingComponent}
          element={<HomeScreen />}
        />
        <Route path={NavigationRoutes.Details} element={<ProjectsScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppNavigation;
