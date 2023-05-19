import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Button, Input} from "react-native-elements";
import { auth } from "../firebase";
import { getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = (props) => {
    const [email,setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [relation, setRelation] = useState('');
    const [imageURL, setImageURL] = useState('');
    const navigation = useNavigation();

    const  register=()=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
            var user =  userCredential.user;
            const auth = getAuth();
            updateProfile(auth.user, {
              displayName: name,
              photoURL: imageURL? imageURL: "https://www.trackergps.com/canvas/images/icons/avatar.jpg"
            }).then(() => {
              // Profile updated!
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });
            navigation.popToTop();
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
          // ..
        });
      
      } 

      const passCheck=()=>{
        if(password!=confirmPassword)
        {
          alert("password and confirm password doesn't match")
        }
      }
    
    return (
        <View style = {styles.container}>
           <Input placeholder="enter email" label="email" leftIcon={{type:"material", name:"email"}} value={email} 
           onChangeText={text=> setEmail(text)}/>
           <Input placeholder="enter name" label="Name" leftIcon={{type:"material", name:"badge"}} value={name} 
           onChangeText={text=> setName(text)}/>
           <Input placeholder="enter Password" label="Password" leftIcon={{type:"material", name:"lock"}} value={password} 
           onChangeText={text=> setPassword(text)} secureTextEntry/>
           <Input placeholder="confirm Password" label="Confirm Password" leftIcon={{type:"material", name:"lock"}} value={confirmPassword} 
           onChangeText={text=> setConfirmPassword(text)} secureTextEntry/>
           <Input placeholder="Enter Relationship with Child" label="Relationship" leftIcon={{type:"material", name:"face"}} value={relation} 
           onChangeText={text=> setRelation(text)} />
         {/*   <Input placeholder="Enter Your Image URL" label="Profile Picture" 
           leftIcon={{type:"material", name:"face"}} value={imageURL} 
           onChangeText={text=> setImageURL(text)}/> */}
           <View style={{flexDirection:'row', marginBottom: "5%"}}>
            <Text style={{fontWeight:'800'}}>Already a Member?</Text>
           <TouchableOpacity style={{color:'red',fontWeight:'800'}} onPress={()=>navigation.navigate('LoginScreen')}><Text>Login</Text></TouchableOpacity>
           </View>
          
           <TouchableOpacity style = {{backgroundColor: '#6FB3B8', width: 100, height: 40, alignItems: 'center',
          justifyContent:'center', borderRadius: 5,shadowColor: "#000",
          shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
          elevation: 8,}} onPress={()=>{register(),passCheck()}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Register</Text></TouchableOpacity>

           {/* <Button title = 'Register' style = {styles.button} onPress={register}/> */}
        </View>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 30,
        backgroundColor: '#6FB3B8'

    },
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor:'#BADFE7'
    }
})