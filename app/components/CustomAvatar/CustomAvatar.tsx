import { Avatar, HStack, Text, VStack } from 'native-base';
import React, { type FC } from 'react';
import { type ImageSourcePropType } from 'react-native';
import type { CustomAvatarProps } from './types';

const CustomAvatar: FC<CustomAvatarProps> = ({
  placeholder = '',
  size = 'md',
  source = '',
  name,
  textType = 'bold',
  textProps,
  subTitle,
  subTitleTextProps,
  subTitleTextType = 'light',
  ...rest
}) => {
  return (
    <HStack alignItems={'center'}>
      <Avatar size={size} source={source as ImageSourcePropType} {...rest}>
        {placeholder}
      </Avatar>
      <VStack space={1}>
        {name && (
          <Text ml={3} variant={textType} {...textProps}>
            {name}
          </Text>
        )}
        {subTitle && (
          <Text ml={3} variant={subTitleTextType} {...subTitleTextProps}>
            {subTitle}
          </Text>
        )}
      </VStack>
    </HStack>
  );
};

export default CustomAvatar;
