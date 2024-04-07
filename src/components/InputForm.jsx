import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'

const InputForm = ( {label, error, onChange, isSecure} ) => {
  const [input, setInput] = useState ("");
  
  const onChangeText = (text)=>{
    setInput(text);
    onChange(text);
  };
    return (
    <View style={styles.view}>
        <Text style={styles.subtitle}> {label} </Text>
        <TextInput style={styles.input} value={input} onChangeText={onChangeText} secureTextEntry={isSecure} />
        {error? <Text style={styles.error}>{error}</Text>: null}      
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  subtitle: {
    width: "90%",
    fontSize: 16,
    fontFamily: "InterRegular",
  },
  error: {
    fontSize: 16,
    color: "red",
    fontFamily: "InterRegular",
    fontStyle: "italic",
  },
  input: {
    width: "90%",
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: "blue",
    padding: 2,
    fontFamily: "InterRegular",
    fontSize: 14,
  },



})