import { View, StyleSheet } from "react-native";
import Categories from "../components/Categories";

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Categories navigation={navigation}/>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
    container: {
    paddingTop: 30,
    marginTop: 20,
    marginBottom: 10,
    flex: 1,
    width: "100%",
    alignItems: "center",
    },
});