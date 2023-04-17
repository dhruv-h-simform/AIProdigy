import { FlatList, Spinner } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../../components';
import { AppConstants, NavigationRoutes } from '../../constants';
import { useAppNavigation } from '../../hooks';
import { ScreenLayout } from '../../layouts';
import { useAppDispatch, useAppSelector } from '../../redux';
import { generateAccessToken } from '../../redux/authentication';
import { getPortals } from '../../redux/project';
import { useLocation } from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getString } from '../../utils';

const HomeScreen = () => {
  const { navigate } = useAppNavigation();
  const dispatch = useAppDispatch();

  const { search } = useLocation();
  const parameters = new URLSearchParams(search);

  const token = parameters.get('code');

  useEffect(() => {
    if (token) {
      AsyncStorage.setItem(AppConstants.AUTH_TOKEN, token).then(() => {
        navigate(NavigationRoutes.BottomTabs);
      });
    }
  }, [token]);

  const { loading, portals } = useAppSelector(state => state.project);

  const apiCall = async () => {
    const authToken = await getString(AppConstants.AUTH_TOKEN);
    if (authToken) {
      dispatch(generateAccessToken()).then(() => {
        dispatch(getPortals());
      });
    }
  };

  useEffect(() => {
    if (token === null) {
      apiCall();
    }
  }, [token]);

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
      </View>
    </ScreenLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
