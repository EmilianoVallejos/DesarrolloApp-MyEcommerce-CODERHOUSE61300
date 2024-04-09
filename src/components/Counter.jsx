import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { increment, decrement, incrementByAmount, reset} from '../features/counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux';


const Counter = ({ stock, onChangeQuantity }) => {
    const count = useSelector((state)=> state.counterReducer.value);

    const dispatch = useDispatch();

    const decrementCount = () => {
        if (count > 1) {
          dispatch(decrement());
          onChangeQuantity(count - 1);
        }
      };
    
      const incrementCount = () => {
        if (count < stock) {
          dispatch(increment());
          onChangeQuantity(count + 1);
        }
      };
    
      const resetCount = () => {
        dispatch(reset());
        onChangeQuantity(1); 
      };
      
    return (
    <View style={styles.container}>
        <View style={styles.buttonsContainer}> 
            <Pressable onPress={decrementCount} style={styles.button}> 
                <Text style={styles.buttontext}> - </Text>
            </Pressable>
            <Text> {count} </Text>
            <Pressable onPress={incrementCount} style={styles.button}> 
                <Text style={styles.buttonText}> + </Text>
            </Pressable>
            <Pressable onPress={resetCount} style={styles.button}>
                <Text style={styles.buttonText}>x</Text>
            </Pressable>
        </View>
    </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 10,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginBottom: 10,
    },
    button: {
        padding: 10,
        backgroundColor: "gray",
    },
    buttonText: {
        fontSize: 18,
        fontFamily: "InterRegular",
        color: "white",
    },


})