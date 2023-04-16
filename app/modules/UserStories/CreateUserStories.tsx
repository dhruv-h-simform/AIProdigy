import { FlatList, Stack, Text } from 'native-base';
import React, { useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { CustomButton, CustomTextInput } from '../../components';
import { ScreenLayout } from '../../layouts';
import { useAppDispatch, useAppSelector } from '../../redux';
import { generateUserStories } from '../../redux/userStories';
import { createTasks } from '../../redux/project';
import { useRoute } from '@react-navigation/core';

const renderItem = ({ item }: any) => {
  return (
    <Stack
      bg={'app.white.light'}
      padding={4}
      borderWidth={1}
      marginY={2}
      borderRadius={10}
      borderColor="app.primary.light"
      shadow={4}>
      <Text variant={'medium'}>{item}</Text>
    </Stack>
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
  const { listOfTask } = useAppSelector(state => state.userStory);
  // const listOfTask = ['Hello World', 'Nice App'];
  const taskList = useMemo(
    () =>
      listOfTask?.map(item => {
        return item?.replace(/^\d+\.\s*/, '');
      }),
    [listOfTask],
  );

  return (
    <ScreenLayout>
      <Stack mt={50} flex={1} marginX={4} space={4}>
        <Text alignSelf={'center'}>CreateUserStories</Text>
        <CustomTextInput
          placeholder="give your prompts"
          value={query}
          onChangeText={text => setQuery(text)}
        />
        <CustomButton
          title="Generate task"
          onPress={() => {
            dispatch(generateUserStories({ userStory: query }));
          }}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={taskList}
          renderItem={renderItem}
        />
        {listOfTask?.length > 0 && (
          <CustomButton
            title="Create All task"
            onPress={() => {
              listOfTask.forEach(taskName => {
                dispatch(
                  createTasks({
                    name: taskName ?? '',
                    portalId: portal?.id_string,
                    projectId: project?.id_string,
                    person_responsible: Number(login_id),
                  }),
                ).then(res => {
                  console.log('createTaskscreateTaskscreateTasks', res);
                });
              });
            }}
          />
        )}
      </Stack>
    </ScreenLayout>
  );
};

export default CreateUserStories;

const styles = StyleSheet.create({});
