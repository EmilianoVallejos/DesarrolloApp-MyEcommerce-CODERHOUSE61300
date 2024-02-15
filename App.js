import { useState } from 'react';
import Home from './src/screens/Home';
import ItemListCategories from './src/screens/ItemListCategories';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';

/*import { AppRegistry } from 'react-native';
import App from './App'; // Ruta al componente principal de tu aplicación
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);*/



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


