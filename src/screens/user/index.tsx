import { Text, View } from '@/src/components/Themed';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import Animated from 'react-native-reanimated';

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
      <Animated.Image
        source={{ uri: `https://picsum.photos/id/${Number(id) * 10}/200/300` }}
        style={{ width: 200, height: 200 }}
        sharedTransitionTag="tag"
      />
    </View>
  );
};

export default User;
