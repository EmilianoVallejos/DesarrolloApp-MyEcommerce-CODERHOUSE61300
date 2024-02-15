import {  View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Categories from '../components/Categories';

function Home ({setCategorySelected}) {
    return (
        <View style={ {flex: 1}}>
            <Header title={'Inicio'}/>
            <Categories setCategorySelected= {setCategorySelected}/>
        </View>
    );
}
export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      alignItems: "center",
    },
  });