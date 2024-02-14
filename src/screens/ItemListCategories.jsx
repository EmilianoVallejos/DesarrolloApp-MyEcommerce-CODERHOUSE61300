import { FlatList, Text, View} from "react-native";
import products from '../data/products.json';
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useEffect, useState } from "react";


function ItemListCategories ({category}){
    const [products, setProducts] = useState ([]);
    const [keyword, setKeyword] = useState ('');
    
    useEffect(()=>{
        if(category){
            const products = allProducts.filter( (product)=> product.category === category)
            const filteredProducts = products.filter( (product) => product.title.includes(keyword));
            setProducts(filteredProducts)
        }
    }, [category, keyword])

    return (
        <View>
            <Search keyword={keyword} onSearch={setKeyword} />
            <Text style={ {fontSize: 30}}> Lista de categorías </Text>
            <FlatList 
            data={products}
            renderItem={({item})=> <ProductItem product={item} />} 
            keyExtractor={(item)=> item.id }/>
        
        </View>
    );
}

export default ItemListCategories;