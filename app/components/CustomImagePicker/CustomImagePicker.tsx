import { HStack, Image, Pressable, ScrollView, Stack, Text } from 'native-base';
import React from 'react';
import { icons } from '../../assets';
import useCustomImagePicker from './hooks/useCustomImagePicker';
import type { CustomImagePickerProps } from './types';
import Card from '../CustomCard';

const CustomImagePicker = ({
  selectionLimit = 10,
  quality = 1,
  onImageAdd,
  options = {
    mediaType: 'mixed',
    maxWidth: 300,
    maxHeight: 550,
    quality: quality,
    saveToPhotos: true,
    includeBase64: false,
    selectionLimit: selectionLimit,
    presentationStyle: 'fullScreen',
  },
  label,
  imageProps,
  labelTextProps,
  imageIconProps,
  enableAttachment,
  attachmentProps,
  isDisabled = false,
  required,
  setImages = [],
  ...rest
}: CustomImagePickerProps) => {
  const { permissionsAllow, imageResponse, handleCancel } =
    useCustomImagePicker({ selectionLimit, quality, options, setImages });

  onImageAdd && imageResponse.length > 0 && onImageAdd(imageResponse);

  return (
    <Card pressableProps={{ disabled: true }}>
      <Stack p={3} {...rest}>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <Text variant={'bold'} fontSize={[14, 22]} {...labelTextProps}>
            {label} ({imageResponse.length})
            {required && <Text color={'app.error.dark'}> *</Text>}
          </Text>
          <Card p={2} pressableProps={{ flex: 0, marginX: 0, marginY: 0 }}>
            <Pressable onPress={() => permissionsAllow()} disabled={isDisabled}>
              <Image
                source={icons.attachment}
                alt={'plus-images'}
                _dark={{ tintColor: 'app.primary.light' }}
                _light={{ tintColor: 'app.primary.light' }}
                size={[5, 8]}
                {...attachmentProps}
              />
            </Pressable>
          </Card>
        </HStack>

        <HStack marginTop={2}>
          <ScrollView
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            scrollEnabled
            nestedScrollEnabled>
            {imageResponse?.map((item, index) => (
              <HStack key={index.toString()} space={2}>
                <Image
                  source={{ uri: item?.uri }}
                  width={82}
                  height={74}
                  alt={'images'}
                  borderRadius={5}
                  {...imageProps}
                />
                <Pressable
                  position={'absolute'}
                  right={3}
                  top={1}
                  h={4}
                  w={4}
                  alignItems={'center'}
                  justifyContent={'center'}
                  borderRadius={999}
                  disabled={isDisabled}
                  onPress={() => handleCancel(item)}>
                  <Image
                    source={icons.cancel}
                    alt={'cancel-images'}
                    h={4}
                    w={4}
                    _dark={{ tintColor: 'app.primary.light' }}
                    _light={{ tintColor: 'app.primary.light' }}
                  />
                </Pressable>
              </HStack>
            ))}
          </ScrollView>
        </HStack>
      </Stack>
    </Card>
  );
};

export default CustomImagePicker;
