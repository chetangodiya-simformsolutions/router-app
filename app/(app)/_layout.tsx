import { Redirect, Stack } from 'expo-router';
import React from 'react';

import Loading from '@/components/Loading';
import { useAuth } from '@/context';
import { Platform } from 'react-native';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function SessionLayout() {
  const { isLoading, session } = useAuth();

  if (isLoading) return <Loading />;
  // if not login in user
  if (!session) {
    return <Redirect href={'/authentication/SignIn'} />;
  }

  //logged in user
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{
          presentation: Platform.OS === 'web' ? 'transparentModal' : 'modal',
          ...(Platform.OS === 'web' && {
            animation: 'fade',
            headerShown: false,
          }),
        }}
      />
    </Stack>
  );
}
