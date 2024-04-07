import { FlatList, StyleSheet, View } from "react-native";
import CategoryItem from "./CategoryItem";
import Counter from "./Counter";
import { useGetCategoriesQuery } from "../services/shopService";

function Categories({navigation}) {
  

  const { data, isLoading, error } = useGetCategoriesQuery();
  
  return (
    <View style={styles.container}>
      <Counter/>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CategoryItem navigation={navigation} category={item} />
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
});