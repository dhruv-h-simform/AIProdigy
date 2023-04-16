import { useRoute } from '@react-navigation/core';
import { FlatList } from 'native-base';
import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../../components';
import { NavigationRoutes, Strings } from '../../constants';
import { useAppNavigation } from '../../hooks';
import { ScreenLayout } from '../../layouts';
import { useAppDispatch, useAppSelector } from '../../redux';
import { createProjects, getProjects } from '../../redux/project';

const ProjectsScreen = () => {
  const route = useRoute();
  //@ts-ignore
  const id = route?.params?.id;
  const { navigate } = useAppNavigation();
  const dispatch = useAppDispatch();
  const { projects } = useAppSelector(state => state.project);

  const createNewProject = () => {
    // Create Project
    dispatch(
      createProjects({
        name: 'Demo Project AI',
        // project_rate: 20,
        // bill_status: 'Billable',
        // public: false,
        portalId: id,
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
    );
  };

  useEffect(() => {
    getAllProjects(id);
  }, [id]);

  const getAllProjects = (id: string) => {
    // Get All Projects
    dispatch(getProjects({ portalId: id })).then(() => {});
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
        <Text style={{ marginTop: 50, textAlign: 'center' }}>Projects</Text>
        <FlatList
          style={{ marginTop: 30 }}
          data={projects}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
        />
        <View style={{ marginTop: 20 }}>
          <Button
            onPress={() => navigate(NavigationRoutes.Home)}
            title={'Go to back'}
          />
        </View>
        <Button onPress={createNewProject} title={'Create New Project'} />
      </View>
    </ScreenLayout>
  );
};

export default ProjectsScreen;

const styles = StyleSheet.create({});
