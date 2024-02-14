import { Text, View} from 'react-native';
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