import { Pressable, Stylesheet, Text} from 'react-native';
import Card from "./Card";

const CategoryItem = ( { category, setCategorySelected }) => {
    return (
        <Card style= { {marginVertical: 20 }}>
            <Pressable onPress={ ()=> setCategorySelected(category)}>
                <Text style= {styles.textctgi}> {category} </Text>
            </Pressable>
        </Card>
    );
};
export default CategoryItem;

const styles = StyleSheet.create({
    textctgi: {
        fontSize: 25,
        fontFamily: 'Lato_Regular',
    },
});