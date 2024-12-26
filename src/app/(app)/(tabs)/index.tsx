import { Text, View } from '@/src/components/Themed';
import { router } from 'expo-router';
import { Button, StyleSheet } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>Tab [Home]</Text>
      <Button
        title="profile"
        onPress={() => {
          router.navigate('/profile');
        }}
      />
      <Button
        title="modal"
        onPress={() => {
          router.navigate('/modal');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
