import type { IActionsheetContentProps, IActionsheetProps } from 'native-base';

export interface BottomActionSheetProps extends IActionsheetProps {
  children?: React.ReactElement;
  disableClose?: boolean;
  actionSheetContainerProps?: IActionsheetContentProps;
}

export interface BottomSheetRef {
  show: () => void;
  hide: () => void;
}
