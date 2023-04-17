import { useIsFocused, useRoute } from '@react-navigation/core';
import { FlatList, Spinner } from 'native-base';
import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../../components';
import { NavigationRoutes } from '../../constants';
import { useAppNavigation } from '../../hooks';
import { ScreenLayout } from '../../layouts';
import { useAppDispatch, useAppSelector } from '../../redux';
import { getProjects } from '../../redux/project';

const ProjectsScreen = () => {
  const route = useRoute();
  //@ts-ignore
  const portal = route?.params?.item;
  const isFocus = useIsFocused();
  const { navigate } = useAppNavigation();
  const dispatch = useAppDispatch();
  const { loading, projects } = useAppSelector(state => state.project);

  useEffect(() => {
    getAllProjects(portal?.id);
  }, [portal?.id, isFocus]);

  const getAllProjects = (id: string) => {
    // Get All Projects
    dispatch(getProjects({ portalId: id })).then(() => {});
  };

  const renderItem = (props: any) => {
    const { item } = props;
    return (
      <CustomButton
        title={`${item.name}`}
        onPress={() =>
          navigate(NavigationRoutes.Task, { portal: portal, project: item })
        }
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
          }}>{`${portal?.name} Projects`}</Text>
        {loading && <Spinner mt={20} accessibilityLabel="Loading Projects" />}
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
            style={{ margin: 10 }}
          />
        </View>
        <Button
          onPress={() =>
            navigate(NavigationRoutes.CreateProjectScreen, { portal: portal })
          }
          title={'Create New Project'}
          style={{ margin: 10 }}
        />
      </View>
    </ScreenLayout>
  );
};

export default ProjectsScreen;

const styles = StyleSheet.create({});
