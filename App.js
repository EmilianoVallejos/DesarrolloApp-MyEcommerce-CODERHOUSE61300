import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import { Provider } from "react-redux";
import store from './src/store';
import MainNavigator from "./src/navigation/MainNavigator.jsx";
import { init } from "./src/db/index.js";



init()
  .then(()=> console.log("base de datos inicializada"))
  .catch((err)=>{
    console.log(err);
  })

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return ( 
  <Provider store={store}> 
      <MainNavigator/>
  </Provider>
  );
}