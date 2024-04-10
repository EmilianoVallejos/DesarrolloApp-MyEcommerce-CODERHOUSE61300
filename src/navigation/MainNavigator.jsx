import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopService'
import { setProfileImage, setUser } from "../features/auth/authSlice";
import { fetchSession } from '../db'


const MainNavigator = () => {
    const {user, localId } = useSelector( state => state.authReducer.value.user)
    const {data, error, isLoading} = useGetProfileImageQuery(localId)
    
    const dispatch = useDispatch();

    useEffect(()=> {
      (async () => {
        try {
          const sessions = await fetchSession();
          if (sessions?.rows.length) {
            const user = sessions.rows._array[0];
            dispatch(setUser(user));
          }
        } catch (error){
          console.log(error.message);
        }})();
    }, []);

    useEffect(()=> {
      if(data){
        dispatch(setProfileImage(data.image))
      }
    }, [data]);

    if (isLoading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
  
    if (error) {
      return (
        <View>
          <View>Error al cargar</View>
        </View>
      );
    }
    
    return  ( 
  <NavigationContainer>
    {user?<TabNavigator/> : <AuthStack /> }  
  </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({})