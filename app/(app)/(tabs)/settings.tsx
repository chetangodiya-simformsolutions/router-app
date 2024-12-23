import { Text, View } from '@/components/Themed';
import { useAuth } from '@/context';
import { StyleSheet, Button } from 'react-native';

export default function Tab() {
  const { signOut } = useAuth();
  return (
    <View style={styles.container}>
      <Text>Tab [Settings]</Text>
      <Button title="Sign out" onPress={() => signOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
