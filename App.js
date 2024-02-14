import { useState } from 'react';
import Home from './src/screens/Home';
import ItemListCategories from './src/screens/ItemListCategories';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';

export default function App() {
  const [categorySelected, setCategorySelected] = useState('');
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded){ 
    return null
  }
  return ( 
    <> 
    {categorySelected ? (
      <ItemListCategories/>
    ): ( 
      <Home setCategorySelected= {setCategorySelected}/>
    )}
    </>); 
    }


