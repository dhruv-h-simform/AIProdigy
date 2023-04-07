import { Button, StyleSheet } from 'react-native';
import React from 'react';
import { ScreenLayout } from '../../layouts';
import { useColorMode } from 'native-base';

const DetailsScreen = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <ScreenLayout justifyContent={'center'}>
      <Button title="Change Theme" onPress={() => toggleColorMode()} />
    </ScreenLayout>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
