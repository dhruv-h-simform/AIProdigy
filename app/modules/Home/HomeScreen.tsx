import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAppNavigation } from '../../hooks';
import { NavigationRoutes, Strings } from '../../constants';
import { toastRef } from '../../configs';
import { ScreenLayout } from '../../layouts';

const HomeScreen = () => {
  const { navigate } = useAppNavigation();
  return (
    <ScreenLayout>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>{Strings.HomeScreen}</Text>
        <View style={{ marginTop: 20 }}>
          <Button
            onPress={() => navigate(NavigationRoutes.Details)}
            title={'go to details'}
          />
        </View>
        <Button
          onPress={() => toastRef.current?.success('Succeess')}
          title={'Test Toast Success!'}
        />
        <Button
          onPress={() => toastRef.current?.error('Error')}
          title={'Test Toast Error!'}
        />
      </View>
    </ScreenLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
