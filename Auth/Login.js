import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import ApiInstance from "../config/Apis/ApiInstance";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const [model, setModel] = useState({ isSubmitting: false });
    const navigation = useNavigation();

    const login = async () => {
        if (!model.email || !model.password) {
            return Toast.show({
                type: 'info',
                position: 'top',
                text1: 'Validation error',
                text2: 'Please Provide All Fields',
            });
        }
        setModel({ ...model, isSubmitting: true });
        await ApiInstance.post('/auth/Login', model)
            .then((res) => {
                console.log(res, 'send');
                // AsyncStorage.setItem('token', res.data.token);
                // AsyncStorage.setItem('role', res.data.role);

                Toast.show({
                    type: 'success',
                    position: 'top',
                    text1: 'Login Successful',
                    text2: 'Welcome Back!',
                });
                navigation.navigate('User')

                // if (res.data.role === 'admin') {
                //     navigation.navigate('Admin'); // Admin portal
                // } else {
                //     navigation.navigate('User'); // User portal
                // }

                setModel({ ...model, isSubmitting: false });
            })
            .catch((err) => {
                console.log(err, 'error');
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Error',
                    text2: 'Login Failed (Please Try Again)',
                });
                setModel({ ...model, isSubmitting: false });
            });
    };

    return (
        <View style={Styles.mainContainer}>
            <View style={Styles.container}>
                <Text style={Styles.header}>Login</Text>
                <TextInput
                    placeholder="Email"
                    keyboardType="email-address"
                    style={Styles.input}
                    onChangeText={(e) => setModel({ ...model, email: e })}
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    style={Styles.input}
                    onChangeText={(e) => setModel({ ...model, password: e })}
                />
                <TouchableOpacity
                    onPress={login}
                    style={[
                        Styles.button,
                        model.isSubmitting && Styles.disabledButton,
                    ]}
                    disabled={model.isSubmitting}
                >
                    <Text style={Styles.buttonText}>
                        {model.isSubmitting ? "Please wait..." : "Login"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    container: {
        backgroundColor: '#ffffff',
        width: '90%',
        padding: 30,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
        marginTop: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 40,
        textAlign: 'center',
        letterSpacing: 1,
    },
    input: {
        height: 50,
        width: '100%',
        borderBottomWidth: 2,
        borderColor: '#00aaff',
        marginBottom: 20,
        fontSize: 18,
        paddingLeft: 15,
        backgroundColor: '#fff',
        color: '#333',
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#00aaff',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 30,
        marginTop: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    disabledButton: {
        backgroundColor: '#cccccc',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});
