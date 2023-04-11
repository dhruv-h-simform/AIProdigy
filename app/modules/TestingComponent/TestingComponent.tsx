import React from 'react';
import { useAppNavigation } from '../../hooks';
import { NavigationRoutes } from '../../constants';
import { ScreenLayout } from '../../layouts';
import { CustomButton } from '../../components';
import { ScrollView, Stack, Text } from 'native-base';
import { CustomDropDown } from '../../components/CustomDropDown';

const TestingComponentScreen = () => {
  const { navigate } = useAppNavigation();
  return (
    <ScreenLayout>
      <ScrollView flex={1}>
        <Stack flex={1} space={1.5} mx={2}>
          <Text>Testing component</Text>
          <CustomButton
            title="Go To Home"
            variant={'rounded_solid'}
            onPress={() => {
              navigate(NavigationRoutes.BottomTabs);
            }}
          />
          <CustomButton
            title="Go To Home"
            variant={'rounded_outline'}
            onPress={() => {
              navigate(NavigationRoutes.Home);
            }}
          />
          <CustomButton
            title="Go To Home"
            variant={'filled'}
            onPress={() => {
              navigate(NavigationRoutes.Home);
            }}
          />
          <CustomButton
            title="Go To Home link button"
            variant={'link'}
            onPress={() => {
              navigate(NavigationRoutes.Home);
            }}
          />
          <CustomButton
            title="Go To Home"
            variant={'bordered'}
            onPress={() => {
              navigate(NavigationRoutes.Home);
            }}
          />
          <Text variant={'heading'}>Heading</Text>
          <Text variant={'sub-heading'}>Sub Heading</Text>
          <Text variant={'title'}>title</Text>
          <Text variant={'normal'}>normal</Text>
          <Text variant={'default'}>default</Text>
          <Text variant={'bold'}>bold</Text>
          <Text variant={'semi-bold'}>semi-bold</Text>
          <Text variant={'small'}>small</Text>
          <CustomDropDown
            label={'Choose Technology'}
            placeholder={'Choose Technology'}
            menus={[
              { id: 1, label: 'iOS', value: 'ios' },
              { id: 2, label: 'Android', value: 'android' },
              { id: 3, label: 'React Native', value: 'rn' },
              { id: 4, label: 'Web', value: 'web' },
              { id: 5, label: 'Node js', value: 'node' },
              { id: 6, label: 'Windows', value: 'win' },
            ]}
          />
        </Stack>
      </ScrollView>
    </ScreenLayout>
  );
};

export default TestingComponentScreen;
