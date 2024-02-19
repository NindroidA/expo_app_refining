import { View, Text, Button, TouchableOpacity, StyleSheet, Alert, PermissionsAndroid, Platform, Permission } from 'react-native';
import { Link, useNavigation, useRouter } from 'expo-router';
import React from 'react';
import styles from '../styles/mainStyles';

export default function BleScreen() {
    const router = useRouter();
    const navigation = useNavigation();

    // check ble permission status
    // request ble permissions
    // handle button press

    React.useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.title}>BLE Screen</Text>
            <TouchableOpacity style={[styles.button, { borderWidth: 1, borderColor: '#007bff'}]} onPress={handlePress}>
                <Text style={styles.buttonText}>Request Bluetooth Permissions</Text>
            </TouchableOpacity>
        </View>
    );
}

function handlePress() {
    Alert.alert('BLE Button Pressed!');
}

async function requestPermissions() {
    // request ble permissions
    let permission = (Platform.OS === 'android') ? PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN : 'ios_permission';


    await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        {
            title: "Location Permission",
            message: "This app requires access to your location to connect to Bluetooth devices.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
        }
    );
}