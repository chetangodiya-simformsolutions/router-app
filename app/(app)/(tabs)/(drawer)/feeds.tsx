import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

const Feeds = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        gap: 10,
        alignItems: 'center',
      }}
    >
      <Text>User List</Text>
      {[
        Array(10)
          .fill(0)
          .map((_, i) => (
            <Link href={`/user/${i}`} asChild key={i}>
              <Pressable>
                <Text>User {i}</Text>
              </Pressable>
            </Link>
          )),
      ]}
    </View>
  );
};

export default Feeds;
