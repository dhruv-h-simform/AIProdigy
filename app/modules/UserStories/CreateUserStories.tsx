import { useRoute } from '@react-navigation/core';
import { ScrollView, Spinner, Stack, Text } from 'native-base';
import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  CustomButton,
  CustomCheckbox,
  CustomTextInput,
} from '../../components';
import { ScreenLayout } from '../../layouts';
import { useAppDispatch, useAppSelector } from '../../redux';
import { createTasks } from '../../redux/project';
import { generateUserStories, resetTaskList } from '../../redux/userStories';
import { useAppNavigation } from '../../hooks';
import { toastRef } from '../../configs';

const renderItem = ({ item }: any) => {
  return (
    <Stack
      bg={'app.white.light'}
      padding={4}
      borderWidth={1}
      marginY={2}
      borderRadius={10}
      borderColor="app.primary.light"
      shadow={4}></Stack>
  );
};
const CreateUserStories = () => {
  const [query, setQuery] = useState('');
  const route = useRoute();
  // @ts-ignore
  const portal = route?.params?.portal;
  // @ts-ignore
  const project = route?.params?.project;
  const { login_id } = useAppSelector(state => state.project);
  const dispatch = useAppDispatch();
  const { back } = useAppNavigation();
  const { listOfTask } = useAppSelector(state => state.userStory);
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const [genTaskLoader, setGenTaskLoader] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  // const listOfTask = ['Hello World 2', 'Nice App 3'];
  const taskList = useMemo(
    () =>
      listOfTask?.map(item => {
        return item?.replace(/^\d+\.\s*/, '');
      }),
    [listOfTask],
  );

  const listArrayData = useMemo(
    () =>
      taskList?.map(item => {
        return { value: item, label: item };
      }),
    [listOfTask],
  );

  useEffect(() => {
    dispatch(resetTaskList());
  }, []);

  return (
    <ScreenLayout>
      <Stack mt={50} flex={1} marginX={4} space={4}>
        <Text alignSelf={'center'}>Create User Stories</Text>
        <CustomTextInput
          placeholder="give your prompts"
          value={query}
          onChangeText={text => setQuery(text)}
        />
        <CustomButton
          title="Generate task"
          isDisabled={genTaskLoader}
          onPress={() => {
            setGenTaskLoader(true);
            dispatch(generateUserStories({ userStory: query })).then(item =>
              setGenTaskLoader(false),
            );
          }}
        />
        {genTaskLoader && <Spinner accessibilityLabel="Loading tasks" />}
        <ScrollView>
          <CustomCheckbox
            checkboxData={listArrayData}
            value={selectedTasks}
            checkboxProps={{ size: 'sm' }}
            onChange={values => {
              setSelectedTasks(values);
            }}
          />
        </ScrollView>
        {selectedTasks?.length > 0 && (
          <CustomButton
            title="Add selected tasks"
            mx={10}
            mb={4}
            isLoading={loader}
            isDisabled={loader}
            onPress={() => {
              setLoader(true);
              Promise.all(
                selectedTasks.map(taskName =>
                  dispatch(
                    createTasks({
                      name: taskName ?? '',
                      portalId: portal?.id_string,
                      projectId: project?.id_string,
                      person_responsible: Number(login_id),
                    }),
                  ).then(r => r),
                ),
              )
                .then(([stats, info]) => {
                  setLoader(false);
                  console.log('statsstatsstats', stats);
                  toastRef.current?.success(
                    'All the selected task is created successfully.',
                  );
                  back();
                })
                .catch(error => setLoader(false));
            }}
          />
        )}
      </Stack>
    </ScreenLayout>
  );
};

export default CreateUserStories;

const styles = StyleSheet.create({});
