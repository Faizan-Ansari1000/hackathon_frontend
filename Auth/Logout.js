import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();
export const logoutUser = async () => {
    try {
        await AsyncStorage.removeItem("userData"); // AsyncStorage se data delete
        navigation.navigate("Login");
    } catch (error) {
        console.error("Logout Error:", error);
    }
};

export function Logout() {


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={logoutUser}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
    },
    button: {
        width: "60%",
        height: 50,
        backgroundColor: "#f44336",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
