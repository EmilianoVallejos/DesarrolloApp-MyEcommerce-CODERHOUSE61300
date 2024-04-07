import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SubmitButton = (onPress, title) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}> {title} </Text>
    </Pressable>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
  button: {
      backgroundColor: "rgb(14, 117, 169)",
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
      width: '60%'
  },
  text: {
      color: 'white',
      fontFamily: 'InterRegular',
      fontSize: 22
  },
  
})