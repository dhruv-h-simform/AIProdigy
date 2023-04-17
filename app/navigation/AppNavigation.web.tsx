import React, { type FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationRoutes } from '../constants';
import {
  CreateUserStories,
  HomeScreen,
  LoginScreen,
  TasksScreen,
} from '../modules';
import CreateProjectScreen from '../modules/CreateProject';
import ProjectsScreen from '../modules/Projects';

// import your route components too

const AppNavigation: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginScreen />} />
        <Route path={NavigationRoutes.BottomTabs} element={<HomeScreen />} />
        <Route path={NavigationRoutes.Details} element={<ProjectsScreen />} />
        <Route
          path={NavigationRoutes.CreateProjectScreen}
          element={<CreateProjectScreen />}
        />
        <Route path={NavigationRoutes.Task} element={<TasksScreen />} />
        <Route
          path={NavigationRoutes.UserStories}
          element={<CreateUserStories />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppNavigation;
