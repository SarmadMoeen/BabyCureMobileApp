import React, { useState, useRef } from "react";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import {Button, Input} from "react-native-elements";

export default function Payment({navigation}) {
    const paystackWebViewRef = useRef(paystackProps.PayStackRef);
    const [name, setName] = useState('')
    const [phno, setPhNo] = useState('')
    const [email, setEmail] = useState('')

  return (

    <View style={{flex:1,  backgroundColor:'#C2EDCE'}}>

<View style={{ marginHorizontal: 15, }}>
      <Paystack
        paystackKey="pk_test_4f6ffc3f55e513cdeb56e13dd9680afd61cb3702"
        paystackSecretKey="sk_test_55df4d0e2ef238bf1c941f52e317c5fbd46eea7a"
        billingEmail= {email}
        amount={1}
        billingName= {name}
        billingMobile= {phno}
        currency='GHS'
        onCancel={(e) => {
            console.log(e);
        }}
        onSuccess={(res) => {
            console.log(res);
            setName('')
            setPhNo('')
            setEmail('')
            navigation.replace('Chat')
        }}
        ref={paystackWebViewRef}
      />
      <View style={{marginTop: 10, alignItems:'center'}}>
        <Text style={{color:'#388087', fontSize: 40, fontWeight: 'bold'}}>PAYMENT</Text>
      </View>
      <View style={{marginTop: 20}}>
      <Input placeholder="enter Email" label="Email" leftIcon={{type:"material", name:"email"}} value={email} 
           onChangeText={text=> setEmail(text)}/>
      <Input placeholder="enter name" label="Name" leftIcon={{type:"material", name:"badge"}} value={name} 
           onChangeText={text=> setName(text)}/>
      <Input placeholder="enter Phone Number" label="Phone No" keyboardType="numeric" leftIcon={{type:"material", name:"phone"}} value={phno} 
           onChangeText={text=> setPhNo(text)}/>
      </View>
      <View style={{alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity
        onPress={() => {paystackWebViewRef.current.startTransaction(0)}}
        style={styles.paystack}
      >
        <Text style={styles.pay}>Pay Now</Text>
      </TouchableOpacity>
      </View>

    </View>

    </View>
   
  );
}

const styles = StyleSheet.create({
  paystack: {
    
    width: "60%",
    backgroundColor: "#388087",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  pay: {
    color: "white",
  },
});