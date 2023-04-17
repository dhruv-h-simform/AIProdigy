import { CheckIcon, Select } from 'native-base';
import React from 'react';
import type { CustomDropDownProps } from './types';

const CustomDropDown: React.FC<CustomDropDownProps> = ({
  menus,
  children,
  label,
  placeholder,
  ...rest
}) => (
  <Select
    accessibilityLabel={label}
    placeholder={placeholder}
    _selectedItem={{
      bg: 'teal.100',
      endIcon: <CheckIcon size="5" />,
    }}
    {...rest}>
    {menus?.map(item => (
      <Select.Item label={item?.label} value={item?.value} />
    ))}
  </Select>
);

export default CustomDropDown;
