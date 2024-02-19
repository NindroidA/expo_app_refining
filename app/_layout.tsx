import { Stack } from 'expo-router';

export const unstable_settings = {
    initialRouteName: "home",
}

export default function Layout() {
  return (
    <Stack 
      initialRouteName="home"
      screenOptions={{
        headerTitle: 'Home',
        headerStyle: {
          backgroundColor: '#121212',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: '#121212',
        },
      }}>
    </Stack>
  );
}