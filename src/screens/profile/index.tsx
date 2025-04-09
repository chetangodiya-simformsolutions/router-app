import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, router, Stack, useNavigation } from 'expo-router';
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
      <Button
        title="profile activity"
        onPress={() => {
          router.push('./profileActivity', { relativeToDirectory: true });
        }}
      />
      <Link href={'/(app)/(user)/searchUser'}>
        <Text>From user: SearchUser</Text>
      </Link>
      <Link href={'/(app)/(profile)/searchUser'}>
        <Text style={{marginTop: 20}}>From profile: SearchUser</Text>
      </Link>
    </View>
  );
};

export default Profile;
