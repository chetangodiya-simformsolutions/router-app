import { View, Text, Button } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';
import Animated from 'react-native-reanimated';

const Profile = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Profile Detail',
          headerBackTitle: 'Back',
        }}
      />
      <Text>ProfileDetail</Text>
      <Animated.View
        style={{ height: 50, width: 100, backgroundColor: 'red' }}
        sharedTransitionTag="check"
      />
      <Button
        title="profile activity"
        onPress={() => router.push('/(app)/profile/profileActivity')}
      />
    </View>
  );
};

export default Profile;
