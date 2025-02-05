import { Text } from '@/src/components/Themed';
import { Link, router, Stack, useNavigation } from 'expo-router';
import React from 'react';
import {
  Button,
  FlatList,
  Image,
  Platform,
  Pressable,
  useWindowDimensions,
} from 'react-native';

const Feeds = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const getDimension = (multiplier: number) => {
    return Platform.OS === 'web'
      ? window.innerWidth * multiplier
      : width * multiplier;
  };

  const CELL_WIDTH = getDimension(0.45);
  const SPACER = 10;
  const PADDING = getDimension(0.05);

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Button
              title="Nav"
              onPress={() => {
                // router.back();
                router.push('/(app)/profile/profileActivity');
              }}
            />
          ),
        }}
      />
      <FlatList
        contentContainerStyle={{
          gap: SPACER / 2,
          padding: PADDING - SPACER,
        }}
        data={Array(10)
          .fill(0)
          .map((_, index) => index)}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <Link href={`/user/${item}`} asChild key={item}>
              <Pressable style={{ padding: SPACER / 2 }}>
                <Text>User {item}</Text>
                <Image
                  source={{
                    uri: `https://picsum.photos/id/${item * 10}/400/600`,
                  }}
                  style={{
                    height: CELL_WIDTH,
                    width: CELL_WIDTH,
                  }}
                />
              </Pressable>
            </Link>
          );
        }}
      />
    </>
  );
};

export default Feeds;
