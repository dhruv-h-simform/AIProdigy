import { Image, ScrollView, Stack, Text, useColorModeValue } from 'native-base';
import React from 'react';
import { icons } from '../../assets';
import {
  BottomActionSheet,
  Card,
  CustomButton,
  CustomImagePicker,
  CustomTextInput,
  bottomActionSheetRef,
} from '../../components';
import { CustomDropDown } from '../../components/CustomDropDown';
import { NavigationRoutes } from '../../constants';
import { useAppNavigation } from '../../hooks';
import { ScreenLayout } from '../../layouts';
import { Colors } from '../../theme';

const TestingComponentScreen = () => {
  const { navigate } = useAppNavigation();
  const tintColor = useColorModeValue(
    Colors.lightBlack.light,
    Colors.lightBlack.dark,
  );
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
            title="Open Bottom Sheet"
            variant={'rounded_outline'}
            onPress={() => {
              bottomActionSheetRef.current?.show();
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
          <CustomTextInput
            required
            variant="outline"
            label="hello"
            placeholder="enter name"
            // isInvalid={true}
            // errorMessage="enter valid number"
          />
          <CustomTextInput
            borderRadius={100}
            variant="outline"
            label="hello"
            placeholder="search"
            InputRightElement={
              <Image
                source={icons.search}
                size={6}
                mr={3}
                tintColor={tintColor}
              />
            }
          />
          <CustomImagePicker
            label="Attachment"
            onImageAdd={res => {
              console.log(res);
            }}
            enableAttachment
          />
          <Card.UsersCard
            userDetails={{
              firstName: 'Dhruv',
              lastName: 'Harsora',
              email: 'dhruv.h@simformsolutions.com',
            }}
          />
        </Stack>
        <BottomActionSheet>
          <Stack flex={1} space={1.5} mx={2}>
            <Text>Testing component</Text>
          </Stack>
        </BottomActionSheet>
      </ScrollView>
    </ScreenLayout>
  );
};

export default TestingComponentScreen;
