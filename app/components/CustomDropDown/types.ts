import type { ISelectProps } from 'native-base';

export interface MenuItem {
  id: number;
  label: string;
  value: string;
}

export interface CustomDropDownProps extends ISelectProps {
  menus: MenuItem[];
  children?: React.ReactElement;
  label?: string;
  placeholder?: string;
}
