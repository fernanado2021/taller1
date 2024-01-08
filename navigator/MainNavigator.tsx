import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import WelcomeScreen from "../screen/WelcomeScreen";
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";
import NivelesScreen from "../screen/NivelesScreen";
import JuegoScreenFacil from "../screen/JuegoScreenFacil";
import JuegoScreenMedio from "../screen/JuegoScreenMedio";
import JuegoScreenExtremo from "../screen/JuegoScreenExtremo";

const Tab = createBottomTabNavigator();


//COMENTADO PARA POSIBLES TABS
/*
function MyTabs(){
 return(
        <Tab.Navigator>
            <Tab.Screen name="Login" component={LoginScreen} options={{ headerShown: false, tabBarIcon: ({ color, size, }) => (<MaterialCommunityIcons name="form-textbox" color={color} size={size} />) }}/>
            <Tab.Screen name="Registro" component={RegisterScreen} options={{headerShown: false, tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="view-list" color={color} size={size} />) }} />
    </Tab.Navigator>
    )
}
*/

// esto ingresar en stack navigator para los posibles tabs " Stack.Screen name="Tab" component={MyTabs}/>"

const Stack = createStackNavigator();
function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="Registro" component={RegisterScreen} options={{headerShown: false}} />
            <Stack.Screen name="Niveles" component={NivelesScreen} options={{headerShown: false}} />
            <Stack.Screen name="JuegoFacil" component={JuegoScreenFacil} options={{headerShown: false}} />
            <Stack.Screen name="JuegoMedio" component={JuegoScreenMedio} options={{headerShown: false}} />
            <Stack.Screen name="JuegoExtremo" component={JuegoScreenExtremo} options={{headerShown: false}} />
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