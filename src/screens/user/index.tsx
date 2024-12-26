import { Text, View } from '@/src/components/Themed';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';

const User = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: id?.toString() ?? '',
          headerBackTitle: 'Back',
        }}
      />
      <Text>User detail: {id}</Text>
    </View>
  );
};

export default User;
