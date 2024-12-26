import { View, Text, Button } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';

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
      <Button
        title="profile activity"
        onPress={() => router.navigate('/(app)/profile/profileActivity')}
      />
    </View>
  );
};

export default Profile;
