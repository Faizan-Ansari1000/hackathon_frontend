import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import SignUp from "../../Auth/SignUp";
import Login from "../../Auth/Login";
import Toast from "react-native-toast-message";
import { Text, TouchableOpacity } from "react-native";
import About from "../../Screens/About";
import User from "../../Portal/User/User";
import LoanCategories from "../../Portal/User/LoanCategories";
import Admin from "../../Portal/Admin/Admin";
import Wedding from "../../Portal/User/Wedding";
import HomeConstruction from "../../Portal/User/HomeConstruction";
import Business from "../../Portal/User/Business";
import Education from "../../Portal/User/Education";
import LoanUser from "../../Portal/Admin/LoanUser";


const Stack = createStackNavigator();
export default function AppNavigation() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SignUp">
                    <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
                    <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
                    <Stack.Screen name="About" options={{ headerRight: () => <TouchableOpacity><Text style={{ paddingEnd: 25 }}>LogOut</Text></TouchableOpacity> }} component={About} />
                    <Stack.Screen name="User" component={User} />
                    <Stack.Screen name="LoanCategories" component={LoanCategories} />
                    <Stack.Screen name="Admin" component={Admin} />
                    <Stack.Screen name="Wedding" component={Wedding} />
                    <Stack.Screen name="HomeConstruction" component={HomeConstruction} />
                    <Stack.Screen name="Business" component={Business} />
                    <Stack.Screen name="Education" component={Education} />
                    <Stack.Screen name="LoanUser" component={LoanUser} />
                </Stack.Navigator>
                <Toast />
            </NavigationContainer>
        </>
    )
}



