import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomButton, CustomTextInput } from '../../components';
import { useAppNavigation } from '../../hooks';
import { ScreenLayout } from '../../layouts';
import { useAppDispatch, useAppSelector } from '../../redux';
import { createProjects } from '../../redux/project';
import { usePageRoute } from '../../navigation/router/usePageRoute';

const CreateProjectScreen = () => {
  const { params } = usePageRoute();
  //@ts-ignore
  const portal = params?.portal;
  const { back } = useAppNavigation();
  const dispatch = useAppDispatch();
  const { loading, projects } = useAppSelector(state => state.project);
  const [projectName, setProjectName] = useState('');
  const createNewProject = () => {
    // Create Project
    dispatch(
      createProjects({
        name: projectName,
        // project_rate: 20,
        // bill_status: 'Billable',
        // public: false,
        portalId: portal?.id,
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
      console.log('resresres', res);
      back();
    });
  };

  return (
    <ScreenLayout>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            marginTop: 50,
            textAlign: 'center',
          }}>
          Create New Project
        </Text>
        <View style={{ margin: 15 }}>
          <CustomTextInput
            onChangeText={setProjectName}
            variant={'outline'}
            isDisabled={loading}
            label="Project Name"
          />
        </View>
        <CustomButton
          onPress={createNewProject}
          isLoading={loading}
          isDisabled={loading}
          title={'Create Project'}
          style={{ margin: 10 }}
        />
      </View>
    </ScreenLayout>
  );
};

export default CreateProjectScreen;

const styles = StyleSheet.create({});
