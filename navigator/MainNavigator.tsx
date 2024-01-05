import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import WelcomeScreen from "../screen/WelcomeScreen";
import JuegoScreen from "../screen/JuegoScreen";
import LoginScreen from "../screen/LoginScreen";
import NivelesScreen from "../screen/NivelesScreen";
import RegisterScreen from "../screen/RegisterScreen";

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Login" component={LoginScreen} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="form-textbox" color={color} size={size} />) }}/>
            <Tab.Screen name="Registro" component={RegisterScreen} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="view-list" color={color} size={size} />) }} />
    </Tab.Navigator>
    )
}

const Stack = createStackNavigator();
function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Tab" component={MyTabs}/>
        </Stack.Navigator>
    )
}

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}