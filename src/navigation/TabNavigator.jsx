import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from "../navigation/ShopStack"
import CartStack from "./Cartstack";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../global/colors";
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import OrdersStack from "./OrdersStack";

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}>
                <Tab.Screen name="ShopTab" component={ShopStack} options={{
                    tabBarIcon: ({focused})=> {
                        return (
                            <View style={styles.tabContainer} > 
                                <FontAwesome name="shopping-bag" size={30} color={focused ? "black": "green"} />
                                <Text style={{ color: focused ? "black": "green"}}> Shop </Text>
                            </View>
                        );
                    },
                }}
                />
                <Tab.Screen name="CartTab" component={CartStack} options={{
                    tabBarIcon: ({focused})=> {
                        return (
                            <View style={styles.tabContainer} > 
                                <FontAwesome5 name="shopping-cart" size={30} color={focused ? "black": "green"} />
                                <Text style={{ color: focused ? "black": "green"}}> Cart </Text>
                            </View>
                        );
                    },
                }}/>
                <Tab.Screen name="OrdersTab" component={OrdersStack} options={{
                    tabBarIcon: ({focused})=> {
                        return (
                            <View style={styles.tabContainer} > 
                                <MaterialCommunityIcons name="order-bool-ascending-variant" size={30} color={focused ? "black": "green"}/>
                                <Text style={{ color: focused ? "black": "green"}}> Orders </Text>
                            </View>
                        );
                    },
                }}/>
                <Tab.Screen name="MyProfileStack" component={MyProfileStack} options={{
                    tabBarIcon: ({focused})=> {
                        return (
                            <View style={styles.tabContainer} > 
                                <FontAwesome5 name="smile-wink" size={30} color={focused ? "black": "green"}/>
                                <Text style={{ color: focused ? "black": "green"}}> My Profile </Text>
                            </View>
                        );
                    },
                }}/>
            </Tab.Navigator>
    );
};

export default TabNavigator;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.blue_100,
        height: 50,
        elevation: 4,
        shadowColor: 'Black',
        borderRadius: 10,
        position: 'absolute'
    },
    tabContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
});