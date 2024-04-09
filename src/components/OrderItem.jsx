import React, { useEffect, useState } from 'react';
import { StyleSheet,View, FlatList, Pressable, ActivityIndicator } from 'react-native'; 
import { Octicons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native'; 
import { colors } from '../global/colors';
import { useGetOrdersQuery } from '../services/shopService';
import { useSelector } from 'react-redux';

const OrderItem = () => {
    const user = useSelector((state) => state.authReducer.value.user); 
    const { data: orders, error, isLoading, refetch } = useGetOrdersQuery(); 
    const [formattedOrders, setFormattedOrders] = useState([]);
    const navigation = useNavigation(); 

    useEffect(() => {
        refetch(); 
    }, [refetch]); 

    useEffect(() => {
        if (orders) {
            const formatted = Object.keys(orders).map(orderId => {
                const order = orders[orderId];
                const formattedDate = new Date(order.createdAt).toLocaleDateString('es-ES');
                return { ...order, formattedDate, id: orderId }; 
            });

            formatted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

            const userOrders = formatted.filter(order => order.user === user);
            setFormattedOrders(userOrders);
        }
    }, [orders, user]);

    useFocusEffect(
        React.useCallback(() => {
            refetch();
        }, [])
    );

    if (isLoading) {
        return <ActivityIndicator style={styles.loader} size="large" color={colors.primary} />;
    }
    
    if (error) {
        return <Text errorColor >Error: {error.message}</Text>;
    }
    
    if (!formattedOrders || formattedOrders.length === 0) {
        return (
            <View style={styles.noProductsContainer}>
                <Text font text>No hay órdenes disponibles</Text>
            </View>
        );
    }

    const handleOrderDetail = (order) => {
        navigation.navigate('OrdersDetail', { orders: formattedOrders, selectedOrder: order }); 
    };

    return (
        <FlatList 
            data={formattedOrders}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View itemCart>
                    <View>
                        <Text text>{item.formattedDate}</Text>
                        <Text font text>${item.total}</Text>
                    </View>
                    <Pressable onPress={() => handleOrderDetail(item)}>
                        <Octicons name="info" size={24} color="black" />
                    </Pressable>
                </View>
            )}
        />
    );
};

export default OrderItem;

const styles = StyleSheet.create({
  noProductsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
})