import { Image } from 'native-base';
import React, { type FC } from 'react';
import type { ImageSourcePropType } from 'react-native';
import type { CustomImageProps } from './types';

const CustomImage: FC<CustomImageProps> = ({ source, ...rest }) => {
  return (
    <Image
      source={source as ImageSourcePropType}
      alt="custom-image"
      size="xl"
      borderRadius={6}
      {...rest}
    />
  );
};

export default CustomImage;
