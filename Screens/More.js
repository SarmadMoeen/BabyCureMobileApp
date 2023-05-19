import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Input } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, setOptions } from "firebase/auth";
const More = ({ navigation }) => {




    const dosignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            navigation.replace('LoginScreen');
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <View style={styles.container}>
            <View style={{ flex: 0.90 }}>
                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => {navigation.navigate('profile')}}>
                    <Ionicons name="person-circle-outline" size={35} style={{marginTop: 20, marginLeft: 20}}>
                        <Text style={{fontSize: 18, marginLeft: 20, justifyContent:'center'}}>   My Profile</Text>
                    </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => {}}>
                    <Ionicons name="bookmark-outline" size={35} style={{marginTop: 20, marginLeft: 20}}>
                        <Text style={{fontSize: 18, marginLeft: 20, justifyContent:'center'}}>   Saved</Text>
                    </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => {}}>
                    <Ionicons name="star-outline" size={35} style={{marginTop: 20, marginLeft: 20}}>
                        <Text style={{fontSize: 18, marginLeft: 20, justifyContent:'center'}}>   Rate Us</Text>
                    </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => {}}>
                    <Ionicons name="help-outline" size={35} style={{marginTop: 20, marginLeft: 20}}>
                        <Text style={{fontSize: 18, marginLeft: 20, justifyContent:'center'}}>   QnA</Text>
                    </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', justifyContent:'center' }} onPress={() => {}}>
                <Ionicons name="alert-circle-outline" size={35} style={{marginTop: 20, marginLeft: 20}}>
                        <Text style={{fontSize: 18, marginLeft: 20}}>   About Us</Text>
                    </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', justifyContent:'center' }} onPress={() => {}}>
                <Ionicons name="settings-outline" size={35} style={{marginTop: 20, marginLeft: 20}}>
                        <Text style={{fontSize: 18, marginLeft: 20}}>   Setting</Text>
                    </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', justifyContent:'center' }} onPress={() => {}}>
                <Ionicons name="construct-outline" size={35} style={{marginTop: 20, marginLeft: 20}}>
                        <Text style={{fontSize: 18, marginLeft: 20}}>   Serives</Text>
                    </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', justifyContent:'center' }} onPress={() => {}}>
                <Ionicons >
                        <Text style={{fontSize: 18, marginLeft: 20}}>  </Text>
                    </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', justifyContent:'center' }} onPress={() => {dosignOut()}}>
                <Ionicons name="md-log-out" size={35} style={{marginTop: 20, marginLeft: 20}}>
                        <Text style={{fontSize: 18, marginLeft: 20}}>   Logout</Text>
                    </Ionicons>
                </TouchableOpacity>
        
            </View>

            <View

                style={{
                    flex: 0.10, width: '100%', height: 100, backgroundColor: '#388087', shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                    elevation: 8, flexDirection: 'row', marginTop: 30, alignItems: 'center', justifyContent: 'center'
                }}>
                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => navigation.navigate('homeScreen')}>
                    <FontAwesomeIcon name="home" size={30} style={{ padding: 10, marginLeft: 39, marginRight: 39 }} ></FontAwesomeIcon>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AddBaby')}>
                    <FontAwesomeIcon name="plus" size={30} style={{ padding: 10, marginLeft: 40, marginRight: 40 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PhysicalActivities')}>
                    <FontAwesomeIcon name="clipboard" size={30} style={{ padding: 10, marginLeft: 40, marginRight: 40 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('More')}>
                    <MaterialIcons name="more" size={30} style={{ padding: 10, marginLeft: 39, marginRight: 39 }} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default More;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
    container: {
        flex: 1,
        backgroundColor: '#C2EDCE',
    }
})