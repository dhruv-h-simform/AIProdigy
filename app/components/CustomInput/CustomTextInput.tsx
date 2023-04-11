import { FormControl, HStack, Input, Text } from 'native-base';
import React from 'react';
import type { CustomTextInputProps } from './types';

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  labelVariant,
  errorMessage,
  formControlProps,
  formControlLabelProps,
  formControlErrorProps,
  isInvalid = false,
  rightText,
  required = false,
  ...rest
}) => {
  return (
    <FormControl
      isInvalid={isInvalid}
      marginTop={[1, 4]}
      _web={{ marginTop: 0 }}
      {...formControlProps}>
      <HStack justifyContent={'space-between'}>
        {label && (
          <FormControl.Label variant={labelVariant} {...formControlLabelProps}>
            {label} {required && <Text color={'app.red.dark'}>*</Text>}
          </FormControl.Label>
        )}
        {rightText && (
          <Text
            variant={'bold'}
            fontSize={[14, 22]}
            _web={{ fontSize: [12, 16] }}
            lineHeight={[14, 22]}
            marginTop={1}
            fontWeight={'semibold'}>
            {rightText}
          </Text>
        )}
      </HStack>
      <Input {...rest}></Input>
      <FormControl.ErrorMessage {...formControlErrorProps}>
        {errorMessage ?? ''}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export default CustomTextInput;
