import { View, Text, Button, TouchableOpacity, StyleSheet, Alert, PermissionsAndroid, Platform, Permission } from 'react-native';
import { Link, useNavigation, useRouter } from 'expo-router';
import React from 'react';
import * as Location from 'expo-location';
import styles from '../styles/mainStyles';

export default function LocScreen() {
    const navigation = useNavigation();
    const [location, setLocation] = React.useState({});

    React.useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    async function requestPerms() {

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status == 'granted') {
            console.log('Location permission granted');
            Alert.alert('Thank you! Location permission granted!');
        } else {
            console.log('Location permission denied');
            Alert.alert('Location services are needed to use this app.');
        }
    
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
    }

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.title}>Location Screen</Text>
            <TouchableOpacity style={[styles.button, { borderWidth: 1, borderColor: '#28a745'}]} onPress={requestPerms}>
                <Text style={styles.buttonText}>Request Location Permissions</Text>
            </TouchableOpacity>
        </View>
    );
}

function handlePress() {
    Alert.alert('Location Button Pressed!');
}