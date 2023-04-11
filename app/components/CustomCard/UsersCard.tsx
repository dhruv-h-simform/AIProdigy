import { Stack } from 'native-base';
import React, { useMemo, type FC } from 'react';
import Card from '.';
import { randomColor } from '../../constants';
import CustomAvatar from '../CustomAvatar';
import type { UsersCardProps } from './types';

const UsersCard: FC<UsersCardProps> = ({
  userDetails,
  profileImage,
  cardProps,
}) => {
  const nameOfAssignee = useMemo(
    () => `${userDetails?.firstName ?? ''} ${userDetails?.lastName ?? ''}`,
    [userDetails],
  );
  const placeHolder = useMemo(
    () =>
      `${userDetails?.firstName?.[0]?.toUpperCase() ?? ''}${
        userDetails?.lastName?.[0]?.toUpperCase() ?? ''
      }`,
    [userDetails],
  );
  const colorIndex = useMemo(() => Math.floor(Math.random() * 5), []);
  const {
    pressableProps,
    onPress,
    enableLine,
    isSelected,
    enableCircle = false,
  } = cardProps ?? {};

  return (
    <Card
      {...{ pressableProps, onPress, enableCircle, isSelected, enableLine }}>
      <Stack p={4} flex={1} _web={{ p: 2 }} justifyContent="flex-start">
        {userDetails && (
          <CustomAvatar
            source={profileImage}
            bgColor={randomColor[colorIndex]}
            size={[9, 12]}
            placeholder={placeHolder}
            name={nameOfAssignee}
            subTitle={userDetails?.email ?? ''}
            textProps={{
              fontSize: [14, 20],
              variant: 'default',
              lineHeight: [17, 24],
              _web: {
                fontSize: [16],
              },
            }}
          />
        )}
      </Stack>
    </Card>
  );
};

export default UsersCard;
