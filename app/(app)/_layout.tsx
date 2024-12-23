import { Redirect, Stack } from 'expo-router';
import React from 'react';

import Loading from '@/components/Loading';
import { useAuth } from '@/context';

export default function TabLayout() {
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
    </Stack>
  );
}
