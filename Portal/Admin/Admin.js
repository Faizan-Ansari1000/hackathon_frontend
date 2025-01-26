import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Admin() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Admin</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
                    <Text style={styles.buttonText}>Users</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.buttonPrimary]}
                    onPress={() => navigation.navigate('LoanUser')}>
                    <Text style={styles.buttonText}>Loan Request</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
                    <Text style={styles.buttonText}>Guarantiers</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2D3E50',
        textAlign: 'center',
        marginBottom: 30,
    },
    buttonContainer: {
        justifyContent: 'space-evenly',
        height: 250,
    },
    button: {
        backgroundColor: '#ffffff',
        paddingVertical: 16,
        paddingHorizontal: 30,
        borderRadius: 12,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 6,
    },
    buttonPrimary: {
        backgroundColor: '#4F83CC',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});
