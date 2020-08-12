import React from 'react';
import { SafeAreaView, View, Button, StyleSheet, Platform, Alert } from 'react-native';
import FBLoginButton from '../components/FBLoginButton';

export default function LoginScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <FBLoginButton/>
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})