import { useState } from 'react';
import { StyleSheet, View, TextInput, Pressable } from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";



const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input) {
      onSearch(input);
    }
  };

  const removeInput = () => {
    setInput("");
  };

  return (
    <View style={styles.containersrch}>
      <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}  > 
        <TextInput 
            onChangeText={setInput}
            value={input} 
            style={styles.inputsrch} 
            placeholder='Busque su producto'
        />
        <Pressable onPress={handleSearch} > 
            <AntDesign name="search1" size={25} color="green"  />
        </Pressable>
        <Pressable onPress={removeInput}>
          <Entypo name="circle-with-cross" size={25} color="black" />
        </Pressable>
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    containersrch: {
        flexDirection: "row"
    },
    inputsrch: {
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        width: "70%",
        fontSize: 20,
        marginLeft: 30,
    },
    


})