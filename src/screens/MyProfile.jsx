import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = ({navigation}) => {
    const {image} = useSelector ((state)=> state.authReducer.value.ImageCamera)

  return (
    <View style={styles.container}>
      {image ?
        (
          <Image source={{uri: image }} resizeMode="cover" style={styles.image}/>
        ): (
          <>
            <Image source={require("../../assets/img/myprofile.png")} style={styles.image} resizeMode="cover" />
          </>  
        )} 
          <Pressable 
            onPress={()=> navigation.navigate("Image Selector")} style={styles.button}>
              <Text>Add Profile Picture</Text>
          </Pressable>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  image:{
    width: 100,
    height: 100,
  },
  container: {
    padding: 10,
    gap: 15,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    width: "80%",
    elevation: 10,
    backgroundColor: "rgb(14, 117, 169)",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },


});