import { Box, type IToastProps, Text, useToast } from 'native-base';
import React, { createRef, useImperativeHandle } from 'react';

type placementType =
  | 'top'
  | 'bottom'
  | 'top-right'
  | 'top-left'
  | 'bottom-left'
  | 'bottom-right'
  | undefined;

interface ToastType {
  success: (
    args: string,
    placement?: placementType,
    toastProps?: IToastProps,
  ) => void;
  error: (
    args: string,
    placement?: placementType,
    toastProps?: IToastProps,
  ) => void;
}

export const toastRef = createRef<ToastType>();

const ToastConfig = () => {
  const toast = useToast();

  useImperativeHandle(toastRef, () => ({
    success: (title, placement = 'top', toastProps) => {
      toast.show({
        placement: placement,
        render: () => {
          return (
            <Box bg="emerald.500" px="20" py="3" rounded="sm">
              <Text variant={'bold'} _important={{ color: 'app.white.light' }}>
                {title}
              </Text>
            </Box>
          );
        },
        ...toastProps,
      });
    },
    error: (title, placement = 'top', toastProps) => {
      toast.show({
        placement: placement,
        render: () => {
          return (
            <Box bg="red.500" px="20" py="3" rounded="sm">
              <Text variant={'bold'} _important={{ color: 'app.white.light' }}>
                {title}
              </Text>
            </Box>
          );
        },
        ...toastProps,
      });
    },
  }));
  return <></>;
};

export default ToastConfig;
