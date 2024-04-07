import { createNativeStackNavigator} from "@react-navigation/native-stack"
import { Header } from "@react-navigation/stack"
import Login from "../screens/Login";
import Signup from "../screens/Signup";


const Stack  = createNativeStackNavigator ()

const AuthtStack = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{ header: ()=> <Header title="Welcome"/> }}
        >
                <Stack.Screen name="Login" component={Login}/> 
                <Stack.Screen name="Signup" component={Signup}/> 
            
        </Stack.Navigator>
    );
};
export default AuthtStack;