import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { CustomButton } from '../../components';
import { useAppNavigation } from '../../hooks';
import { AppConstants, NavigationRoutes } from '../../constants';
import { remove } from '../../utils';
import { ScreenLayout } from '../../layouts';
import { Stack, View } from 'native-base';
import { useAppDispatch, useAppSelector } from '../../redux';
import { doLogout } from '../../redux/authentication';
import CustomImage from '../../components/CustomImage';
import { icons } from '../../assets';

const ProfileScreen = () => {
  const { replace } = useAppNavigation();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.auth.loading);

  return (
    <ScreenLayout>
      <Stack flex={1} justifyContent={'flex-start'} px={4} py={2}>
        <Text style={{ textAlign: 'center', marginTop: 40 }}>Profile</Text>
        <CustomImage
          source={icons.logo}
          src={icons.logo}
          alt=""
          height={100}
          mx={'32%'}
          resizeMode="contain"
        />
        <View flex={1} justifyContent={'flex-end'}>
          <CustomButton
            title="Logout"
            variant={'rounded_solid'}
            isLoading={loading}
            mx={10}
            mb={5}
            onPress={async () => {
              dispatch(doLogout()).then(() => {
                remove(AppConstants.AUTH_TOKEN).then(() => {
                  replace(NavigationRoutes.Login);
                });
              });
            }}
          />
        </View>
      </Stack>
    </ScreenLayout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
