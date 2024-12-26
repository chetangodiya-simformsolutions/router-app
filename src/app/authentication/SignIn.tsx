import { Text, View } from '@/src/components/Themed';
import { useAuth } from '@/src/context/AuthProvider';
import { router } from 'expo-router';
import React from 'react';
import { Button } from 'react-native';

const SignIn = () => {
  const { signIn } = useAuth();
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: 5,
      }}
    >
      <Text>SignIn here</Text>
      <Button
        title="Signin"
        onPress={() => {
          signIn();
          router.replace('../(app)');
        }}
      />
    </View>
  );
};

export default SignIn;
