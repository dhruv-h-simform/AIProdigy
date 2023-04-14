import React from 'react';
import { ScreenLayout } from '../../layouts';
import { CustomButton } from '../../components';
import { Linking } from 'react-native';
import { Stack } from 'native-base';
import { AppConstants } from '../../constants';

const LoginScreen = () => {
  return (
    <ScreenLayout>
      <Stack flex={1} justifyContent={'center'} padding={10}>
        <CustomButton
          title="Sign in with Zoho"
          variant={'rounded_solid'}
          onPress={() => {
            Linking.openURL(
              `https://accounts.zoho.com/oauth/v2/auth?scope=${AppConstants.ZOHO_PERMISSION_SCOPE}&client_id=${AppConstants.ZOHO_CLIENT_ID}&response_type=code&access_type=online&prompt=consent&redirect_uri=${AppConstants.ZOHO_REDIRECT_URL}`,
            );
          }}
        />
      </Stack>
    </ScreenLayout>
  );
};

export default LoginScreen;
