import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    title: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 10,
        width: '80%',
        borderRadius: 5,
        overflow: 'hidden',
    },
    button: {
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
        width: '80%',
        borderRadius: 5,
        color: 'white',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    blueButton: {
        backgroundColor: '#007bff',
    },
    greenButton: {
        backgroundColor: '#28a745',
    },
});

export default styles