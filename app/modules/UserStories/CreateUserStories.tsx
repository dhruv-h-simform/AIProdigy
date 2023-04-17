import { useRoute } from '@react-navigation/core';
import {
  Checkbox,
  ScrollView,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from 'native-base';
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
import { Colors } from '../../theme';
import { icons } from '../../assets';
import { Image } from 'native-base';

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
  const [selectAll, setSelectAll] = useState<boolean>(false);
  // const listOfTask = ['Hello World 2', 'Nice App 3'];
  const taskList = useMemo(
    () =>
      listOfTask
        ?.map(item => {
          return item?.replace(/^\d+\.\s*/, '');
        })
        .filter(item => item !== ''),
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

  useEffect(() => {
    setSelectedTasks(selectAll ? taskList : []);
  }, [selectAll]);

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
            setSelectAll(false);
            dispatch(generateUserStories({ userStory: query })).then(item =>
              setGenTaskLoader(false),
            );
          }}
        />
        {genTaskLoader && <Spinner accessibilityLabel="Loading tasks" />}
        {listArrayData?.length > 0 && (
          <Checkbox
            width={'90%'}
            borderColor={'app.black.light'}
            _dark={{
              borderColor: 'app.white.light',
              backgroundColor: 'app.white.dark',
            }}
            _hover={{
              borderColor: 'app.primary.light',
            }}
            _checked={{
              backgroundColor: 'app.primary.light',
              borderColor: 'app.primary.light',
              _hover: { borderColor: 'app.black.light' },
            }}
            _text={{
              fontSize: [14, 17],
              lineHeight: [14, 17],
              color: useColorModeValue(Colors.white.dark, Colors.white.light),
            }}
            value={'Select All'}
            my={1}
            key={Math.random()}
            size={'sm'}
            isChecked={selectAll}
            onChange={isChange => {
              setSelectAll(isChange);
            }}
            icon={
              <Image alt="checkBox-img" source={icons.checkIcon} size={[10]} />
            }>
            Select All
          </Checkbox>
        )}
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
