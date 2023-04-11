import { Actionsheet, useDisclose } from 'native-base';
import React, { createRef, forwardRef, useImperativeHandle } from 'react';
import type { BottomActionSheetProps, BottomSheetRef } from './types';

type Props = BottomActionSheetProps;

export const bottomActionSheetRef = createRef<BottomSheetRef>();

const BottomActionSheet = forwardRef<BottomSheetRef, Props>(
  ({ children, disableClose, actionSheetContainerProps, ...rest }, ref) => {
    const { isOpen, onClose, onOpen } = useDisclose();
    useImperativeHandle(ref ?? bottomActionSheetRef, () => ({
      show: () => {
        onOpen();
      },
      hide: () => {
        onClose();
      },
    }));

    return (
      <Actionsheet
        isOpen={isOpen}
        {...(!disableClose && { onClose })}
        {...rest}>
        <Actionsheet.Content w={'100%'} {...actionSheetContainerProps}>
          {React.isValidElement(children) && children}
        </Actionsheet.Content>
      </Actionsheet>
    );
  },
);

export default BottomActionSheet;
