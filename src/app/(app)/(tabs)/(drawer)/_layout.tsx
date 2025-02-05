import { Stack } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView>
      <Stack.Screen options={{ headerShown: false }} />
      <Drawer>
        <Drawer.Screen
          name="feeds"
          options={{
            title: 'Feeds',
          }}
        />
        <Drawer.Screen
          name="chats"
          options={{
            title: 'Chats',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
