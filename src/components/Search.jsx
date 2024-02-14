import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import { Row } from 'react-bootstrap';


const Search = ({keyword, onSearch}) => {

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}  > 
        <TextInput 
            onChangeText={onSearch}
            value={keyword} 
            style={styles.input} 
            placeholder='Busque su producto'
        />
        <Pressable> 
            <AntDesign name="search1" size={25} color="green" />
        </Pressable>
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    input: {
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        width: "70%",
        fontSize: 20,
        marginTop: 50,
        marginLeft: 30,
    },


})