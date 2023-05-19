import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const homeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={{ flex: 0.60 }}>
                <TouchableOpacity style={{
                    marginTop: 10, backgroundColor: '#BADFE7', width: '80%', height: '100%', shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                    elevation: 8, borderRadius: 20, alignItems: 'center'
                }} onPress={() => navigation.navigate('BabyDetails')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity>
                        <Text style={{ fontSize: 16, fontWeight: '600', padding: '10%' }}>Azlan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text style={{ fontSize: 16, fontWeight: '600', padding: '10%' }}></Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text style={{ fontSize: 16, fontWeight: '600', padding: '10%' }} onPress={() => navigation.navigate('Mother')}>Amna</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'column', paddingLeft: 25, paddingRight: 25 }}>
                        <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 20 }}>Hi! Good Evening Azlan</Text>
                        <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 20 }}>BMI of baby: 6.0 kg</Text>
                        <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 20 }}>Upcoming Vaccination : 24th December, 2023</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: '800' }}>2 Months</Text>
                        <Text style={{ fontSize: 16, fontWeight: '800', marginLeft: 30 }}>1 Week</Text>
                    </View>
                </TouchableOpacity>


            </View>


            <TouchableOpacity style={{
                flex: 0.10,
                marginTop: 20, backgroundColor: '#BADFE7', width: '80%', height: '100%', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, borderRadius: 10, flexDirection: 'row', alignItems: 'center'
            }} onPress={() => navigation.navigate('BMICal')}>
                <Ionicons name='md-calculator' size={30} color='black' style={{ marginLeft: 30, marginTop: 8 }} />
                <Text style={{ fontSize: 16, fontWeight: '700', marginLeft: 20, marginTop: 8 }}>BMI Calculator</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{
                flex: 0.10,
                marginTop: 10, backgroundColor: '#BADFE7', width: '80%', height: '60%', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, borderRadius: 10, flexDirection: 'row', alignItems: 'center'
            }} onPress={() => navigation.navigate('CommonProblems')}>
                <Ionicons name='md-bulb' size={30} color='black' style={{ marginLeft: 30, marginTop: 8 }} />
                <Text style={{ fontSize: 16, fontWeight: '700', marginLeft: 20, marginTop: 8 }}>Common Problems</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                flex: 0.10,
                marginTop: 10, backgroundColor: '#BADFE7', width: '80%', height: '100%', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, borderRadius: 10, flexDirection: 'row', alignItems: 'center'
            }} onPress={() => navigation.navigate('DIYRemandRec')}>

                <Ionicons name='md-restaurant' size={30} color='black' style={{ marginLeft: 30, marginTop: 8 }} />
                <Text style={{ fontSize: 16, fontWeight: '700', marginLeft: 20, marginTop: 8 }}>DIY Remedies & Recipes</Text>
            </TouchableOpacity>



            <View style={{
                flex: 0.10, width: '100%', height: 100, backgroundColor: '#388087', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65,
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

export default homeScreen;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#6FB3B8',
    }
})