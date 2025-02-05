import { View, Text, Button } from 'react-native';
import React from 'react';
import { router, Stack, useNavigation } from 'expo-router';
import Animated from 'react-native-reanimated';

const Profile = () => {
  const navigation = useNavigation();
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
        onPress={() => {
          router.push('./profileActivity', { relativeToDirectory: true });
        }}
      />
    </View>
  );
};

export default Profile;
