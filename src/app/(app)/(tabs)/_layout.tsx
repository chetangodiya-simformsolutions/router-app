import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Slot, Tabs } from 'expo-router';

export default function TabLayout() {
  return <Slot />;
  return <Tabs screenOptions={{ headerShown: false }} />;

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#rgb(23, 104, 225)' }}>
      <Tabs.Screen
        name="(drawer)"
        options={{
          headerShown: false,
          title: 'Drawer',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cube" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
