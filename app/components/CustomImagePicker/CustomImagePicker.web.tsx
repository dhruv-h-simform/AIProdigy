import { HStack, Image, Pressable, ScrollView, Stack, Text } from 'native-base';
import React, { useRef, useState } from 'react';
import { icons } from '../../assets';
import type { CustomImagePickerProps, InputFile } from './types';

const CustomImagePicker = ({
  onImageAdd,
}: Pick<CustomImagePickerProps, 'onImageAdd'>) => {
  const inputFile = useRef<InputFile>(null);
  const [imageResponse, setImageResponse] = useState<any[]>([]);

  const onClick = (e: any) => {
    inputFile.current?.click();
  };

  const handleCancel = (item: any) => {
    const newResponse = imageResponse?.filter(value => value !== item);
    setImageResponse(newResponse);
  };
  const handleFileChange = (e: any) => {
    //will use afterwords
    // const formData = new FormData();
    // formData.append('img', e.target.files?.[0]);

    const values = Object.values(e.target.files);
    values.map((item: any) => {
      const preview = URL.createObjectURL(item);
      console.log(item);

      setImageResponse(prev => [...prev, { file: item, preview: preview }]);
    });
  };

  onImageAdd && onImageAdd(imageResponse);

  return (
    <div>
      <input
        type="file"
        id="file"
        ref={inputFile}
        multiple
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <>
        <Stack>
          <Text _web={{ fontSize: [12, 16] }} fontWeight="bold">
            Attachment
          </Text>
          <HStack space={3} justifyContent={'center'} alignItems={'center'}>
            <Pressable onPress={onClick} flex={1}>
              <HStack
                justifyContent={'space-between'}
                borderWidth={1}
                borderRadius={5}
                fontSize={16}
                fontWeight={'400'}
                alignItems={'center'}
                paddingX={2}
                h={[10, 50]}
                _light={{ borderColor: 'app.lightGray.light' }}
                _dark={{ borderColor: 'app.white.light' }}>
                <Text>Choose Images</Text>
                <Image
                  source={icons.attachment}
                  alt={'plus-images'}
                  h={5}
                  w={5}
                  _dark={{ tintColor: 'app.white.light' }}
                  _light={{ tintColor: 'app.dimGray.dark' }}
                />
              </HStack>
            </Pressable>

            <HStack flex={1}>
              <ScrollView
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                scrollEnabled
                flex={1}>
                {imageResponse?.map((item, index) => (
                  <HStack marginX={2} key={index.toString()}>
                    <Image
                      source={{ uri: item?.preview }}
                      width={82}
                      height={74}
                      alt={'images'}
                      borderRadius={5}
                    />
                    <Pressable
                      _dark={{ backgroundColor: 'app.white.dark' }}
                      _light={{ backgroundColor: 'app.white.light' }}
                      position={'absolute'}
                      right={1}
                      top={1}
                      h={4}
                      w={4}
                      alignItems={'center'}
                      justifyContent={'center'}
                      borderRadius={999}
                      onPress={() => handleCancel(item)}>
                      <Image
                        source={icons.cancel}
                        alt={'cancel-images'}
                        h={2}
                        w={2}
                      />
                    </Pressable>
                  </HStack>
                ))}
              </ScrollView>
            </HStack>
          </HStack>
        </Stack>
      </>
    </div>
  );
};

export default CustomImagePicker;
