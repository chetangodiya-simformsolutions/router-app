import { createDrawerNavigator } from '@react-navigation/drawer';
import { router, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Button, Text } from 'react-native';

const Drawer = createDrawerNavigator();

const ScreenA = () => {
  return <Button title="Go Back" onPress={() => router.back()} />;
};

const ScreenB = () => {
  return <Text>screen B</Text>;
};

const ProfileDrawer = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      headerShown: false,
    });
    return () => {
      navigation.getParent()?.setOptions({
        headerShown: true,
      });
    };
  }, []);

  return (
    <Drawer.Navigator initialRouteName="A">
      <Drawer.Screen name="A" component={ScreenA} />
      <Drawer.Screen name="B" component={ScreenB} />
    </Drawer.Navigator>
  );
};

export default ProfileDrawer;
