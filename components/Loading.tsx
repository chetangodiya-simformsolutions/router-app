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
        flexDirection: 'row',
        gap: 5,
      }}
    >
      <ActivityIndicator />
      <Text>Loading...</Text>
    </View>
  );
};

export default Loading;
