import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Button, Input } from "react-native-elements";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


const LoginScreen = ({ navigation, props }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignIn = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            navigation.replace('AddBaby');
          })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });

    }

    /* useEffect(()=>{
         const auth = getAuth();
             const unsubscribe = onAuthStateChanged(auth, (user) => {
             if (user) {
                 navigation.replace('AddBaby');
             } else {
                 // User is signed out
                 // ...
                   navigation.canGoBack() &&
                 navigation.popToTop();  
             }
             });
             return unsubscribe;
     },[])
  */
    return (
        <View style={styles.container}>
            <Input placeholder="enter email" label="email" leftIcon={{ type: "material", name: "email" }} value={email}
                onChangeText={text => setEmail(text)} />
            <Input placeholder="enter Password" label="Password" leftIcon={{ type: "material", name: "lock" }} value={password}
                onChangeText={text => setPassword(text)} secureTextEntry />

            <TouchableOpacity style={{ color: 'red', fontWeight: 'light', fontStyle: 'italic', textDecorationLine: 'underline', alignItems: 'flex-end' }} onPress={() => navigation.navigate('forgetPassword')}><Text>Forget Password?</Text></TouchableOpacity>

         <View style={{alignItems:'center'}}>
         <TouchableOpacity style = {{backgroundColor: '#6FB3B8', width: 100, height: 40, alignItems: 'center',
          justifyContent:'center', borderRadius: 5,shadowColor: "#000",
          shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
          elevation: 8,}} onPress={()=>{ SignIn()}}><Text style={{fontSize: 16, fontWeight: 'bold'}}>Login</Text></TouchableOpacity>

         </View>
          
            <View style={{ flexDirection: 'row', marginTop: 20, alignItems:'center', justifyContent:'center'}}>
                <Text style={{ fontWeight: '800' }}>Not a Member?    </Text>
                <TouchableOpacity style={{ color: 'red', fontWeight: '800' }} onPress={() => navigation.navigate('RegisterScreen')}><Text>Signup</Text></TouchableOpacity>
            </View>

            {/* 
           <Button title = 'Register' style = {styles.button} onPress={()=>navigation.navigate('Register')}/> */}
        </View>
    )
}

export default LoginScreen;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,
        color: 'black',
        backgroundColor: '#F841CE',
        borderRadius: 300,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        fontSize: 24,
        fontWeight: '200'

    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#BADFE7'
    }
})