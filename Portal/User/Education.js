import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, Modal } from "react-native";
import Toast from "react-native-toast-message";
import ApiInstance from "../../config/Apis/ApiInstance";
import { useNavigation } from "@react-navigation/native";

export default function Education() {
    const [model, setModel] = useState({});
    const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
    const navigation = useNavigation();

    const submit = async () => {
        if (!model.event || !model.loan || !model.period || !model.initial) {
            return Toast.show({
                type: "error",
                position: "top",
                text1: "Validation Error",
                text2: "Please fill all fields",
            });
        }

        try {
            await ApiInstance.post("/education", model)
                .then((res) => {
                    console.log("send", res);
                    Toast.show({
                        type: "success",
                        position: "top",
                        text1: "Successfully Sent",
                    });
                    setModel({});
                    setModalVisible(true);
                })
                .catch((err) => {
                    console.log(err, "error");
                    Toast.show({
                        type: "error",
                        position: "top",
                        text1: "Submission Failed",
                        text2: "Please try again",
                    });
                });
        } catch (error) {
            console.error(error);
        }
    };

    const submitGuarienteir = async () => {
        if (!data.name || !data.email || !data.cnic) {
            return Toast.show({
                type: "error",
                position: "top",
                text1: "Validation Error",
                text2: "Please fill all fields",
            });
        }

        try {
            await ApiInstance.post("/guarantor", data)
                .then((res) => {
                    console.log("Guarantor Sent", res);
                    Toast.show({
                        type: "success",
                        position: "top",
                        text1: "Guarantor Details Submitted",
                    });
                    setData({});
                    setModalVisible(false);
                })
                .catch((err) => {
                    console.log(err, "error");
                    Toast.show({
                        type: "error",
                        position: "top",
                        text1: "Submission Failed",
                        text2: "Please try again",
                    });
                });
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Apply for Education Loan</Text>
            <TextInput
                style={styles.input}
                placeholder="University Fee"
                placeholderTextColor="#aaa"
                keyboardType="number-pad"
                onChangeText={(e) => setModel({ ...model, universityFee: e })}
                value={model.universityFee || ""}
            />
            <TextInput
                style={styles.input}
                placeholder="Maximum Loan (Amount)"
                placeholderTextColor="#aaa"
                keyboardType="number-pad"
                onChangeText={(e) => setModel({ ...model, maxLoan: e })}
                value={model.maxLoan || ""}
            />
            <TextInput
                style={styles.input}
                placeholder="Loan Period (Months)"
                placeholderTextColor="#aaa"
                keyboardType="number-pad"
                onChangeText={(e) => setModel({ ...model, period: e })}
                value={model.period || ""}
            />
            <TextInput
                style={styles.input}
                placeholder="Initial Deposit"
                placeholderTextColor="#aaa"
                keyboardType="number-pad"
                onChangeText={(e) => setModel({ ...model, initial: e })}
                value={model.initial || ""}
            />
            <TouchableOpacity style={styles.button} onPress={submit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            {/* Success Modal */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalHeading}>Application Submitted!</Text>
                        <Text style={styles.modalDescription}>Please share the guarantor's details:</Text>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Name"
                            onChangeText={(e) => setData({ ...data, name: e })}

                        />
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Email"
                            keyboardType="email-address"
                            onChangeText={(e) => setData({ ...data, email: e })}

                        />
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Original CNIC"
                            keyboardType="number-pad"
                            onChangeText={(e) => setData({ ...data, cnic: e })}

                        />
                        <TouchableOpacity style={styles.modalButton} onPress={submitGuarienteir}>
                            <Text style={styles.modalButtonText}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        padding: 20,
        justifyContent: "center",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        fontSize: 16,
        color: "#333",
    },
    button: {
        backgroundColor: "#4CAF50",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    }, modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: 300,
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    modalHeading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    modalDescription: {
        fontSize: 16,
        color: "#666",
        marginBottom: 15,
        textAlign: "center",
    },
    modalInput: {
        width: "100%",
        backgroundColor: "#f0f0f0",
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        fontSize: 16,
        color: "#333",
    },
    modalButton: {
        backgroundColor: "#4CAF50",
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
        marginBottom: 10,
    },
    modalButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    closeButton: {
        backgroundColor: "#d9534f",
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
    },
    closeButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
