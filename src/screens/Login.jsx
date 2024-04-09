import { Pressable, StyleSheet, Text, View, SubmitButton, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import { useLoginMutation } from '../services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import { loginSchema } from '../validations/loginSchema';
import { insertSession } from '../db';


const Login = ({navigation}) => {
  const [ email, setEmail] = useState("");
  const [ errorEmail, setErrorMail] = useState("");
  const [ password, setPassword] = useState("");
  const [ errorPassword, setErrorPassword] = useState("");
  const [triggerSignin, result] = useLoginMutation();

  const dispatch = useDispatch();
  
  useEffect(() => {
    const userAuthenticated = false;
    if (userAuthenticated) {
        navigation.replace("Home");
    }
}, []);

  useEffect(()=>{
    if(result.data){
        dispatch(setUser(result.data));
        insertSession({
          email: result.data.email,
          localId: result.data.localId,
          token: result.data.idToken
        })
        .then((result)=> console.log(result))
        .catch((err)=> console.log(err.message))
    }
}, [result]);

  const onSubmit = ()=>{
    try {
    loginSchema.validateSync({email, password});   
    triggerSignin({email, password});        
  } catch(err){
    switch(err.path){
        case "email":
            setErrorMail(err.message);
            break;
        case "password":
            setErrorPassword(err.message);
            break;
        default:
            break;
          }
        }
      };
  return (
    <View>
      <Text>Bienvenido!</Text>
      <InputForm label={"Email"} error={errorEmail} onChange={setEmail}/>
      <InputForm label={"Password"} error={errorPassword} onChange={setPassword} isSecure={true}/>
      <Pressable onPress={()=> navigation.navigate("Signup")}>
                <Text>
                  Ir al registro                    
                </Text>
      </Pressable>
      {
        result.isLoading ? (
          <ActivityIndicator size="large" color="#2714b5" />
        ) : ( 
      <SubmitButton title={"Login"} onPress={onSubmit}  />    
      )}
    </View>
  )
}
export default Login;

const styles = StyleSheet.create({});