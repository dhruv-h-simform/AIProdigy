import { useRoute, useIsFocused } from '@react-navigation/core';
import { FlatList, Spinner } from 'native-base';
import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../../components';
import { NavigationRoutes, Strings } from '../../constants';
import { useAppNavigation } from '../../hooks';
import { ScreenLayout } from '../../layouts';
import { useAppDispatch, useAppSelector } from '../../redux';
import {
  createProjects,
  createTasks,
  getProjects,
  getTasks,
} from '../../redux/project';

const TasksScreen = () => {
  const route = useRoute();
  //@ts-ignore
  const portal = route?.params?.portal;
  const project = route?.params?.project;
  const { navigate, back } = useAppNavigation();
  const dispatch = useAppDispatch();
  const { tasks, login_id, loading } = useAppSelector(state => state.project);

  const createNewTask = () => {
    // Create Project
    dispatch(
      createTasks({
        name: 'First Demo Task with AI',
        // project_rate: 20,
        // bill_status: 'Billable',
        // public: false,
        portalId: portal?.id_string,
        projectId: project?.id_string,
        person_responsible: Number(login_id),
        // // owner: undefined,
        // description: 'This is demo project',
        // template_id: 0,
        // group_id: 2108785000000018001,
        // start_date: '04/16/2023',
        // end_date: '04/16/2025',
        // strict_project: '1',
        // field_id: 'UDF_MULTI1',
        // budget_type: 6,
        // budget_value: 20000,
        // threshold: 10000,
        // currency: 'USD',
      }),
    ).then(res => {
      console.log('createTaskscreateTaskscreateTasks', res);
    });
  };

  const isFocus = useIsFocused();
  useEffect(() => {
    getAllTasks(portal?.id_string, project?.id_string);
  }, [portal, isFocus]);

  const getAllTasks = (id: string, projectId: string) => {
    // Get All Projects
    dispatch(getTasks({ portalId: id, projectId: projectId })).then(res => {
      console.log('resresresresresres', res);
    });
  };

  const renderItem = (props: any) => {
    const { item } = props;
    return (
      <CustomButton
        title={`${item.name}`}
        // onPress={() => getAllProjects(item?.id_string)}
        style={{ margin: 10 }}
      />
    );
  };

  return (
    <ScreenLayout>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text
          style={{
            marginTop: 50,
            textAlign: 'center',
          }}>{`${project?.name} Tasks`}</Text>
        {loading && <Spinner mt={20} accessibilityLabel="Loading Tasks" />}
        <FlatList
          style={{ marginTop: 30 }}
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item: any) => item?.id_string}
        />
        <View style={{ marginTop: 20 }}>
          <Button onPress={() => back()} title={'Go to back'} />
        </View>
        <Button onPress={createNewTask} title={'Create New Task'} />
        <Button
          onPress={() =>
            navigate(NavigationRoutes.UserStories, {
              portal: portal,
              project: project,
            })
          }
          title={'Create New Stories'}
        />
      </View>
    </ScreenLayout>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({});
