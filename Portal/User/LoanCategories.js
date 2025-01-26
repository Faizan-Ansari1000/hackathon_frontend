import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";

export default function LoanCategories() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Select a Loan Category</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Wedding')}>
                    <Text style={styles.cardText}>Weddings Loan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('HomeConstruction')}>
                    <Text style={styles.cardText}>Home Construction Loans</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Business')}>
                    <Text style={styles.cardText}>Business Startup Loan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Education')}>
                    <Text style={styles.cardText}>Education Loans</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f8ff",
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
        textAlign: "center",
    },
    scrollContainer: {
        alignItems: "center",
    },
    card: {
        width: "90%",
        backgroundColor: "#4CAF50",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginBottom: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    cardText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
});
