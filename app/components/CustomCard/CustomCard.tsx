import { Pressable, Stack } from 'native-base';
import React from 'react';
import { Colors } from '../../theme';
import { hexToRgb } from '../../utils';
import type { CustomCardProps } from './types';

const CustomCard: React.FC<CustomCardProps> = ({
  children,
  pressableProps,
  onPress,
  enableLine,
  isSelected,
  enableCircle = false,
  ...rest
}) => (
  <Pressable
    flex={1}
    marginX={[4, 6]}
    marginY={[3, 5]}
    _web={{
      marginX: [0],
      marginY: [0],
    }}
    onPress={onPress}
    _light={{
      bg: isSelected ? hexToRgb(Colors.primary.light, 0.3) : 'app.white.light',
    }}
    _dark={{
      bg: isSelected ? hexToRgb(Colors.primary.light, 0.3) : 'app.black.light',
    }}
    {...pressableProps}>
    <Stack
      shadow={['card', 'none']}
      _ios={{ _important: { shadow: ['card'] } }}
      _dark={{ bg: 'app.white.light' }}
      _light={{ bg: 'app.white.light' }}
      borderRadius={[6, 10]}
      _web={{
        borderRadius: [4],
      }}
      {...rest}>
      {enableLine && (
        <Stack
          h={2}
          bg={'app.primary.light'}
          borderTopLeftRadius={[6, 10]}
          borderTopRightRadius={[6, 10]}
          _web={{
            borderTopLeftRadius: [4],
            borderTopRightRadius: [4],
          }}
        />
      )}
      {React.isValidElement(children) && children}
    </Stack>
  </Pressable>
);

export default CustomCard;
