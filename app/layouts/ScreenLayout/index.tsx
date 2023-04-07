import {
  type IStackProps,
  Stack,
  StatusBar,
  Text,
  useColorMode,
} from 'native-base';
import React from 'react';

interface ScreenLayoutProps extends IStackProps {
  children: React.ReactElement;
}

const ScreenLayout = ({ children, ...rest }: ScreenLayoutProps) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <StatusBar
        networkActivityIndicatorVisible
        translucent={true}
        barStyle={colorMode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={'rgba(0,0,0,0)'}
      />
      <Stack
        flex={1}
        _light={{ backgroundColor: 'app.white.light' }}
        _dark={{ backgroundColor: 'app.black.light' }}
        {...rest}>
        {React.isValidElement(children) ? (
          children
        ) : (
          <Text variant={'heading'}>LayoutScreen</Text>
        )}
      </Stack>
    </>
  );
};

export default ScreenLayout;
