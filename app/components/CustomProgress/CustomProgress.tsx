import { Progress, Stack, Text } from 'native-base';
import React from 'react';
import { Colors } from '../../theme';
import type { CustomProgressProps } from './types';

const CustomProgress: React.FC<CustomProgressProps> = ({ value, ...rest }) => (
  <Stack flex={1} space={1.5} mx={2}>
    <Text textAlign="right">{value} %</Text>
    <Progress
      value={value}
      bg="coolGray.200"
      _filledTrack={{
        bg: Colors.primary.light,
      }}
      {...rest}
    />
  </Stack>
);

export default CustomProgress;
