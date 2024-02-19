import { StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
    },
});

export default function Layout() {
    return (
        <Stack 
            screenOptions={{ 
                contentStyle: {backgroundColor: '#121212'},
            }}
        />
    );
}