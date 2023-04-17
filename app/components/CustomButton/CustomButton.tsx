import { Button, Image } from 'native-base';
import React from 'react';
import { type ImageSourcePropType } from 'react-native';
import type { CustomButtonProps } from './types';

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  children,
  leftIcon,
  leftIconProps,
  ...rest
}) => (
  <Button
    variant="rounded_solid"
    leftIcon={
      leftIcon && (
        <Image
          source={leftIcon as ImageSourcePropType}
          size={'22px'}
          alt={'img'}
          tintColor={'app.white.light'}
          {...leftIconProps}
        />
      )
    }
    {...rest}>
    {React.isValidElement(children) ? children : title}
  </Button>
);

export default CustomButton;
