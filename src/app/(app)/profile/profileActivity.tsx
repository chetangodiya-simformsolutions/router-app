import { router, Stack } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

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
    </View>
  );
};

export default ProfileActivity;
