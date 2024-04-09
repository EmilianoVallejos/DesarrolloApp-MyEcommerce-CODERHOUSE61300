import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { removeItem } from '../features/shop/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({item}) => {

  const dispatch = useDispatch(); 

  const handleRemoveItem = () => { 
    dispatch(removeItem({ productId: item.id })) };

  return (
    <View>
      <Text> Nombre: {item.title} </Text>
      <Text> Precio: {item.price} </Text>
      <Text> Cantidad: {item.quantity} </Text>
      <Pressable onPress={() => {
        handleRemoveItem();
      }}>
        <Ionicons name="trash" size={30} color="black" />
      </Pressable>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({})
