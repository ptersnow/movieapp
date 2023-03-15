import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { TabRoutes } from './routes/tab.routes';

export default function App() {
    return (
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
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
