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
import CustomImage from '../../components/CustomImage';
import { icons } from '../../assets';

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
        <CustomImage
          source={icons.logo}
          src={icons.logo}
          alt=""
          height={100}
          mx={'32%'}
          resizeMode="contain"
        />
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
