import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const ProfileRouter = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profileActivity" />
      <Stack.Screen name="profileDrawer" />
    </Stack>
  );
}

export default ProfileRouter