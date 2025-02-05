import { CommonActions } from '@react-navigation/native';
import { router, Stack, useNavigation } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

const ProfileActivity = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Profile Activity',
          headerBackTitle: 'Back',
          headerRight: () => (
            <Button
              title="dismiss"
              onPress={() => {
                navigation.dispatch(
                  CommonActions.reset({
                    routes: [{ key: '(tabs)', name: '(tabs)' }],
                  })
                );
                // router.dismissAll()
              }}
            />
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
