import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View, Text, ActivityIndicator, ImageBackground } from "react-native";
import CategoryItem from "./CategoryItem";
import Counter from "./Counter";
import { useGetCategoriesQuery } from "../services/shopService";

function Categories({navigation}) {

  const [isLoading, setIsLoading] = useState(true);
  
  const { data, error } = useGetCategoriesQuery();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="larges" color="#0000ff"/>
        <Text> Cargando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Counter/>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ImageBackground source={getImageSource(item)} style={styles.textBackground}>
          <CategoryItem navigation={navigation} category={item} />
          </ImageBackground>
        )}
        keyExtractor={(category) => category}
      />
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#635f5f3d',
  },
  textBackground: {
    margin: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
});