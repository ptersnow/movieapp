import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.header}>Sign up</Text>
            <Text>Sign up with one of following options</Text>

            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder='Enter you name' />

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder='Enter you email' />

            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder='Enter you password' />
      
            <Button title='Create Account' />

            <Text>Already have an account? Login</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F1C2C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    label: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    input: {
        width: 330,
        height: 47,
        borderRadius: 11,
        backgroundColor: '#353341',

        color: '#9C9C9C',
        fontSize: 14,
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 15
    }
});
