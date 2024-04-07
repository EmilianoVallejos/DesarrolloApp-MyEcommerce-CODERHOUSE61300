import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";


const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch()

  return (
    <Pressable 
      onPress={() => {
        dispatch(setCategorySelected(category))
        navigation.navigate("ItemListCategories", { category});
      }}
    >
      <Card style={styles.cardContainer}>
        <Text style={styles.textctgi}>{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
    textctgi: {
        fontSize: 30,
        fontFamily: 'Lato_Bold',
    },
    cardContainer: {
        marginHorizontal: 30,
        marginVertical: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#e6aa76",
        borderRadius: 10,
      },
});