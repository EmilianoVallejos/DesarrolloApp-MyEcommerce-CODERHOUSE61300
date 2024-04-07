import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import InputForm from '../components/InputForm';
import { useSignUpMutation } from '../services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import { signupSchema } from '../validations/signupSchema';

const Signup = (navigation) => {
    const [ email, setEmail] = useState("");
    const [ errorEmail, setErrorMail] = useState("");
    const [ password, setPassword] = useState("");
    const [ errorPassword, setErrorPassword] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState ("");
    const [ errorConfirmPassword, setErrorConfirmPassword] = useState ("");
    const [triggerSignup, result] = useSignUpMutation()

    const dispatch = useDispatch();

    const onSubmit = ()=>{
        try{
            signupSchema.validateSync({email, password, confirmPassword});
            triggerSignup({email, password});
            
        } catch (err){
            switch(err.path){
                case "email":
                    setErrorMail(err.message);
                    break;
                case "password":
                    setErrorPassword(err.message);
                    break;
                case "confirmPassword":
                    setErrorConfirmPassword(err.message);
                    break;
                default:
                    break;            
            }            
        }     
    };

    useEffect(()=>{
        if(result.data){
            dispatch(setUser(result.data));
        }
    }, [result]);

  return (
    <View>
      <Text>Signup</Text>
      <InputForm label={"Email"} error={errorEmail} onChange={setEmail}/>
      <InputForm label={"Password"} error={errorPassword} onChange={setPassword} isSecure={true}/>
      <InputForm label={"Confirm password"} error={errorConfirmPassword} onChange={setConfirmPassword} isSecure={true}/>
      <SubmitButton title={"Register"} onPress={onSubmit}  />  
      <Pressable onPress={()=> navigation.navigate("Login")}>
                <Text>
                  Ir al registro                    
                </Text>
      </Pressable>  
    </View>
    );
};

export default Signup;

const styles = StyleSheet.create({});