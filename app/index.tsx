import { View, Text, Button } from 'react-native';
import { Link, Stack } from 'expo-router';
import React from 'react';
import styles from './styles/mainStyles';

export default function Home() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <View style={styles.buttonContainer}>
        <Link href="/pages/ble-screen" style={[styles.button, styles.blueButton]}>
          <Text style={styles.buttonText}>Go to BLE Screen</Text>
        </Link>
        <Link href="/pages/location-screen" style={[styles.button, styles.greenButton]}>
          <Text style={styles.buttonText}>Go to Location Screen</Text>
        </Link>
      </View>
    </View>
  );
}