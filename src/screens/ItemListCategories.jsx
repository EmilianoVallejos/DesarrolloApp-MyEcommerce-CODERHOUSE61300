import { FlatList, Text, View, StyleSheet} from "react-native";
import allProducts from '../data/products.json';
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useEffect, useState } from "react";


function ItemListCategories ({category}){
    const [products, setProducts] = useState ([]);
    const [keyword, setKeyword] = useState ('');
    
    useEffect(()=> {
        if (category) {
            const products = allProducts.filter( (product)=> product.category === category)
            const filteredProducts = products.filter( (product) => 
            product.title.includes(keyword));
            setProducts(filteredProducts);
        } else {
            const filteredProducts = allProducts.filter((product) =>
                product.title.includes(keyword)
            );
            setProducts(filteredProducts);
        }
    }, [category, keyword])

    return (
        <View style={styles.container}>
            <Search onSearch={setKeyword} />
            <Text style={ {fontSize: 30}}> Lista de categorías </Text>
            <FlatList 
            data={products}
            renderItem={({item})=> <ProductItem product={item} />} 
            keyExtractor={(item)=> item.id }/>
        
        </View>
    );
}

export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        },
    });