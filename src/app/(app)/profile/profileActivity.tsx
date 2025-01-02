import { router, Stack } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

const ProfileActivity = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Profile Activity',
          headerBackTitle: 'Back',
          headerRight: () => (
            <Button title="dismiss" onPress={() => router.dismissAll()} />
          ),
        }}
      />
      <Text>ProfileActivity</Text>
      <Animated.View
        style={{ height: 200, width: 200, backgroundColor: 'red' }}
        sharedTransitionTag="check"
      />
    </View>
  );
};

export default ProfileActivity;
