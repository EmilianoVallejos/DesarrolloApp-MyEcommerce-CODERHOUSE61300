import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartItem from "../components/CartItem";
import { useSelector,useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import { clearCart as clearCartAction } from '../features/shop/cartSlice';
import { usePostOrderMutation } from "../services/shopService";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const userEmail = useSelector((state) => state.authReducer.value.user); 
  const dispatch = useDispatch();
  const [triggerPost, result] = usePostOrderMutation();
  const [isOrdering, setIsOrdering] = useState(false);

  const confirmCart = async () => {
    try {
      setIsOrdering(true);
      const currentDate = new Date().toISOString();
      const order = { total, cartItems, user: userEmail, createdAt: currentDate };
      const response = await triggerPost(order);
      setIsOrdering(false);
      if (response && response.data) {
        showToast('success', 'Orden enviada correctamente');
        Alert.alert(
          'Orden enviada',
          '¿Desea vaciar el carrito?',
          [
            { text: 'Sí', onPress: clearCart },
            { text: 'No', style: 'cancel' }
          ]
        );
      } else {
        showToast('error', 'Error al enviar la orden');
      }
    } catch (error) {
      setIsOrdering(false);
      showToast('error', 'Error al enviar la orden');
    }
  }

  const clearCart = () => {
    dispatch(clearCartAction());
  }

  const showToast = (type, message) => {
    Toast.show({
      type: type,
      text1: message,
      visibilityTime: 3000,
      autoHide: true,
      bottomOffset: 40
    });
  }

  return (
    <View>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={(cartItem) => cartItem.id}
            clearCart={clearCart}
          />

          <Text>Total: ${total}</Text>
          <Pressable onPress={confirmCart} disabled={isOrdering}>
            <Text> Confirm </Text>
          </Pressable>
        </>
      ) : (
        <Text>No hay productos agregados</Text>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});