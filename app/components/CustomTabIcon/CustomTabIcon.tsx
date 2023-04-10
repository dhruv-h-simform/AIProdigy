import { Image } from 'native-base';
import React from 'react';
import { type CustomTabIconProps } from './types';

const CustomTabIcon = ({ icon, focused, ...rest }: CustomTabIconProps) => {
  return (
    <Image
      source={icon}
      alt={'label-image'}
      size={[8, 10]}
      _dark={{ tintColor: 'app.white.light' }}
      _light={{
        tintColor: 'app.white.light',
      }}
      resizeMode={'stretch'}
      {...rest}
    />
  );
};

export default CustomTabIcon;
