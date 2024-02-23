import { StyleSheet, View } from "react-native";
import React from 'react';

const Card = ({children, style})=> {
    return (
        <View style={ {...styles.containercrd, ...style}}>
            {children}
        </View>
    );
};
export default Card;

const styles = StyleSheet.create({
    containercrd: {
        shadowColor: "hsla(238.84615384615384, 86.66666666666667%, 52.94117647058824%, 0.767)",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 9,
        shadowRadius: 9,
        elevation: 9,
    },
});