import { FlatList, Spinner } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../../components';
import { NavigationRoutes } from '../../constants';
import { useAppNavigation } from '../../hooks';
import { ScreenLayout } from '../../layouts';
import { useAppDispatch, useAppSelector } from '../../redux';
import { generateAccessToken } from '../../redux/authentication';
import { getPortals } from '../../redux/project';

const HomeScreen = () => {
  const { navigate } = useAppNavigation();
  const dispatch = useAppDispatch();
  const { loading, portals } = useAppSelector(state => state.project);
  useEffect(() => {
    dispatch(generateAccessToken()).then(() => {
      dispatch(getPortals());
    });
  }, []);

  const renderItem = (props: any) => {
    const { item } = props;
    return (
      <CustomButton
        title={`${item.name}`}
        onPress={() => navigate(NavigationRoutes.Details, { item: item })}
        style={{ margin: 10 }}
      />
    );
  };

  return (
    <ScreenLayout>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ marginTop: 50, textAlign: 'center' }}>Portals</Text>
        {loading && <Spinner mt={20} accessibilityLabel="Loading Portals" />}
        <FlatList
          data={portals}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
        />
        {/* <View style={{ marginTop: 20 }}>
          <Button
            onPress={() => navigate(NavigationRoutes.Details)}
            title={'go to details'}
          />
        </View>
        <Button
          onPress={() => toastRef.current?.success('Succeess')}
          title={'Test Toast Success!'}
        />
        <Button
          onPress={() => toastRef.current?.error('Error')}
          title={'Test Toast Error!'}
        /> */}
      </View>
    </ScreenLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
