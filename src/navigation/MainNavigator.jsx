import { StyleSheet } from 'react-native'
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
          if (session?.rows.length) {
            const user = session.rows._array[0];
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

  return  ( 
  <NavigationContainer>
    {user?<TabNavigator/> : <AuthStack /> }  
  </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({})