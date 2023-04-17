import {
  Checkbox,
  HStack,
  type ICheckboxGroupProps,
  type ICheckboxProps,
  Image,
  Text,
  useColorModeValue,
} from 'native-base';
import React, { type FC, useState } from 'react';
import { icons } from '../../assets';
import { Colors } from '../../theme';

export type arrayData = {
  value: string;
  label: string;
};

interface CustomCheckboxProps extends ICheckboxGroupProps {
  checkboxProps?: Omit<ICheckboxProps, 'value'>;
  checkboxData: Array<arrayData>;
  enableRightCheck?: boolean;
  required?: boolean;
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({
  onChange,
  checkboxData = [],
  checkboxProps,
  enableRightCheck,
  required,
  ...rest
}) => {
  const [groupValues, setGroupValues] = useState<Array<string>>([]);

  return (
    <>
      {enableRightCheck ? (
        <Checkbox.Group flex={1} onChange={onChange} {...rest}>
          {checkboxData.map((item, index) => (
            <HStack
              key={index}
              width={'100%'}
              justifyContent={'space-between'}
              alignItems={'center'}
              _web={{
                width: '100%',
                px: 3,
              }}>
              <Text textAlign={'center'}>
                {item.label}{' '}
                {required && <Text color={'app.error.dark'}> *</Text>}
              </Text>
              <Checkbox
                borderColor={'app.black.dark'}
                _dark={{
                  borderColor: 'app.white.light',
                  backgroundColor: 'app.white.dark',
                }}
                _hover={{
                  borderColor: 'app.primary.light',
                }}
                _checked={{
                  backgroundColor: 'app.primary.light',
                  borderColor: 'app.primary.light',
                  _hover: { borderColor: 'app.black.dark' },
                }}
                value={item.value}
                onChange={isSelected => {
                  if (isSelected) {
                    setGroupValues([...groupValues, item?.value]);
                    onChange && onChange(groupValues);
                  }
                }}
                accessibilityLabel={'ass'}
                my={1}
                alignSelf={'flex-end'}
                icon={
                  <Image
                    alt="checkBox-img"
                    source={icons.checkIcon}
                    size={[10]}
                  />
                }
                {...checkboxProps}
              />
            </HStack>
          ))}
        </Checkbox.Group>
      ) : (
        <Checkbox.Group onChange={onChange} {...rest}>
          {checkboxData.map((item, index) => {
            return (
              <Checkbox
                width={'90%'}
                borderColor={'app.black.light'}
                _dark={{
                  borderColor: 'app.white.light',
                  backgroundColor: 'app.white.dark',
                }}
                _hover={{
                  borderColor: 'app.primary.light',
                }}
                _checked={{
                  backgroundColor: 'app.primary.light',
                  borderColor: 'app.primary.light',
                  _hover: { borderColor: 'app.black.light' },
                }}
                _text={{
                  fontSize: [14, 17],
                  lineHeight: [14, 17],
                  color: useColorModeValue(
                    Colors.white.dark,
                    Colors.white.light,
                  ),
                }}
                size={4}
                value={item.value}
                my={1}
                key={index}
                icon={
                  <Image
                    alt="checkBox-img"
                    source={icons.checkIcon}
                    size={[10]}
                  />
                }
                {...checkboxProps}>
                {item.label}
              </Checkbox>
            );
          })}
        </Checkbox.Group>
      )}
    </>
  );
};

export default CustomCheckbox;
