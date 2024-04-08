import { Text, View, StyleSheet, Pressable} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { deleteSession } from "../db";

function Header ( { title }) {
    const {localId, user} = useSelector((state) => state.authReducer.value);
    const dispatch = useDispatch();

    const onLogout = async ()=> {
        dispatch(logout())
        const deletedSession = await deleteSession({localId});
    };

    return (
        <View style={styles.container}>
            <Text style= { styles.text}> {title} </Text>
            {user && ( 
            <Pressable style={styles.logout} onPress={onLogout}> 
                <AntDesign name="logout" size={30} color="black"/>
            </Pressable> 
            )}
        </View>
    );
}
export default Header;

const styles = StyleSheet.create ({
    container:{
        flex: 1, 
        backgroundColor: "green", 
        width : "100%", 
        paddingVertical: 8,
        marginTop: 30   
    },
    text: {
        fontSize: 30,
        color: "white",
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Lato_Black',
    },
    logout: {
        position: "absolute",
        right: 20,
    }
});
