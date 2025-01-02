import { Text, View } from '@/src/components/Themed';
import { router, useNavigation } from 'expo-router';
import { Button, StyleSheet } from 'react-native';

export default function Tab() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Tab [Home]</Text>
      <Button
        title="profile detail"
        onPress={() => {
          router.navigate('/profile');
        }}
      />
      <Button
        title="profile activity"
        onPress={() => {
          router.push('/profile');
          router.push('/profile/profileActivity');
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
