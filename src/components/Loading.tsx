import { ActivityIndicator } from 'react-native';
import React from 'react';
import { View, Text } from './Themed';

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
      }}
    >
      <Text style={{ fontSize: 21 }}>My awesome splash screen</Text>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <ActivityIndicator />
        <Text>Loading...</Text>
      </View>
    </View>
  );
};

export default Loading;
