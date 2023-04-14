import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { CustomButton } from '../../components';
import { useAppNavigation } from '../../hooks';
import { AppConstants, NavigationRoutes } from '../../constants';
import { remove } from '../../utils';
import { ScreenLayout } from '../../layouts';
import { Stack } from 'native-base';
import { useAppDispatch, useAppSelector } from '../../redux';
import { doLogout } from '../../redux/authentication';

const ProfileScreen = () => {
  const { replace } = useAppNavigation();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.auth.loading);

  return (
    <ScreenLayout>
      <Stack flex={1} justifyContent={'flex-end'} px={4} py={2}>
        <Text>ProfileScreen</Text>
        <CustomButton
          title="Logout"
          variant={'rounded_solid'}
          isLoading={loading}
          onPress={async () => {
            dispatch(doLogout()).then(() => {
              remove(AppConstants.AUTH_TOKEN).then(() => {
                replace(NavigationRoutes.Login);
              });
            });
          }}
        />
      </Stack>
    </ScreenLayout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
