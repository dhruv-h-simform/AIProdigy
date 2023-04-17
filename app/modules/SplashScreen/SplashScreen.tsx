import React, { useEffect } from 'react';
import { ScreenLayout } from '../../layouts';
import { Stack, Text } from 'native-base';
import { getString } from '../../utils';
import { AppConstants, NavigationRoutes } from '../../constants';
import { isNil } from 'lodash';
import { useAppNavigation } from '../../hooks';

const SplashScreen = () => {
  const { replace } = useAppNavigation();
  useEffect(() => {
    let timeOut: NodeJS.Timeout;
    getString(AppConstants.AUTH_TOKEN).then(res => {
      timeOut = setTimeout(() => {
        if (isNil(res)) {
          replace(NavigationRoutes.Login);
        } else {
          replace(NavigationRoutes.BottomTabs);
          /** Call dispatch to get user details */
        }
      }, 2000);
    });
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <ScreenLayout>
      <Stack flex={1} justifyContent={'center'} alignItems={'center'}>
        <Text
          variant={'heading'}
          _important={{
            _light: { color: 'app.primary.light' },
            _dark: { color: 'app.primary.light' },
          }}>
          Pro Manage
        </Text>
      </Stack>
    </ScreenLayout>
  );
};

export default SplashScreen;
