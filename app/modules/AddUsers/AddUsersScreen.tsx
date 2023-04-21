import { Checkbox, FlatList, HStack, Spinner } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAppNavigation } from '../../hooks';
import { ScreenLayout } from '../../layouts';
import { usePageRoute } from '../../navigation/router/usePageRoute';
import { useAppDispatch, useAppSelector } from '../../redux';
import {
  addUsersInProject,
  createTasks,
  getPortalUsers,
} from '../../redux/project';

let selectedUsers: string[] = [];
const AddUsersScreen = () => {
  const { params } = usePageRoute();
  //@ts-ignore
  const portal = params?.portal;
  //@ts-ignore
  const project = params?.project;
  const { navigate, back } = useAppNavigation();
  const dispatch = useAppDispatch();
  const { users, login_id, loading } = useAppSelector(state => state.project);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const addUsers = () => {
    // Create Project
    dispatch(
      addUsersInProject({
        name: 'First Demo Task with AI',
        portalId: portal?.id_string,
        projectId: project?.id_string,
        email: selectedUsers.join(','),
      }),
    ).then(res => {
      back();
    });
  };

  useEffect(() => {
    getPortalUsersAll(portal?.id_string);
  }, [portal]);

  const getPortalUsersAll = (id: string) => {
    // Get All Projects
    dispatch(getPortalUsers({ portalId: id })).then(res => {});
  };

  const onCheckBoxPress = (id: string) => {
    if (selectedUsers.includes(id)) {
      selectedUsers.splice(selectedUsers.indexOf(id), 1);
    } else {
      selectedUsers = selectedUsers.concat(id);
    }
  };

  const renderItem = (props: any) => {
    const { item, index } = props;
    return (
      <HStack alignItems={'center'} mx={5}>
        <Checkbox
          value={selectedUsers[index]}
          onChange={() => onCheckBoxPress(item.email)}
        />
        <Text style={{ margin: 10 }}>
          {item.name} - {item.email}
        </Text>
      </HStack>
    );
  };

  // useEffect(() => {
  //   if (!selectAll) {
  //     users.forEach(item => {
  //       return (selectedUsers = selectedUsers.concat(item?.email));
  //     });
  //   } else {
  //     selectedUsers = [];
  //   }
  // }, [selectAll]);

  return (
    <ScreenLayout>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text
          style={{
            marginTop: 50,
            textAlign: 'center',
          }}>{`${project?.name} Users`}</Text>
        {loading && <Spinner mt={20} accessibilityLabel="Loading Tasks" />}

        {/* <Checkbox
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
        </Checkbox> */}
        <FlatList
          style={{ marginTop: 30 }}
          data={users}
          renderItem={renderItem}
          keyExtractor={(item: any) => item?.id_string}
        />

        <View style={{ marginTop: 20 }}>
          <Button onPress={() => back()} title={'Go to back'} />
        </View>
        <Button onPress={addUsers} title={'Add Users'} />
      </View>
    </ScreenLayout>
  );
};

export default AddUsersScreen;

const styles = StyleSheet.create({});
