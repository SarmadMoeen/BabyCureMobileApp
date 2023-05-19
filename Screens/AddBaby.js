import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, SafeAreaView, } from "react-native";
import { Button, ButtonGroup, Input } from "react-native-elements";

import Ionicons from '@expo/vector-icons/Ionicons';
import { Calendar } from "react-native-calendars";
import { RadioGroup, FormControlLabel } from 'react-native-radio-buttons-group';
import axios from "axios";




const AddBaby = ({ navigation }) => {

    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const [showDate, setshowDate] = useState(false);
    const [date, setDate] = useState([]);

    console.log(date);

    const checkTextInput = () => {
        //Check for the Name TextInput
        if (!name.trim()) {
            alert('Please Enter Name');
            return;
        }
        //Check for the Email TextInput
        if (!date.trim()) {
            alert('Please Enter Age');
            return;
        }
        if (!weight.trim()) {
            alert('Please Enter Weight');
            return;
        }
        if (!height.trim()) {
            alert('Please Enter Height');
            return;
        }
        if(height < 42)
        {
            alert('Please Enter Height Correctly');
            return;
        }
       
        if(weight< 2)
        {
            alert('Please Enter Weight Correctly.. Weight is ttooo less');
            return;
        }
       
        //Checked Successfully
        //Do whatever you want
      
        navigation.navigate('homeScreen')
        axios.post('http://10.135.64.128:3000/Babies', {
            name,
            date,
            radioButtons,
            weight,
            height
            },[])
    };


    const [radioButtons, setRadioButtons] = useState([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Male',
            value: 'Male'
        },
        {
            id: '2',
            label: 'Female',
            value: 'Female'
        },
        {
            id: '3',
            label: 'Other',
            value: 'Other'
        }
    ]);

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }

  
    return (


        <View style={styles.container}>


            <Text style={{ fontSize: 28 }}>Let's Add a Baby</Text>


            <View style={{
                flex: 0.95, background: '#388087', width: '90%', height: '100%', marginTop: '3%',
                shadowColor: "#000", shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30,
                shadowRadius: 4.65, elevation: 8
            }}>
            
            <Input placeholder="enter name" label="Name" leftIcon={{type:"font-awesome", name:"user"}} value={name} 
           onChangeText={text=> setName(text)}/>
         

                    <TouchableOpacity onPress={() => setshowDate(true)}>
                        <Input style={{
                            marginTop: '2%', marginLeft: '1.5%'
                        }} placeholder="add Date" label="Date"
                            leftIcon={{ type: "font-awesome", name: "calendar" }}
                            placeholderTextColor="#6FB3B8" labelColor="black" value={date}></Input>
                    </TouchableOpacity>

             
                    <Text style={{ marginLeft: '3%', fontSize: 16, fontWeight: 'bold', color: '#5f9ea0' }}>Gender</Text>
                    <View style={{ flexDirection: 'row', marginTop: '2%', marginBottom: '5%' }}><RadioGroup
                        layout='row'
                        label="Gender"
                        radioButtons={radioButtons}
                        onPress={onPressRadioButton}
                    /></View>



                <View style={{flexDirection: 'row'}}>
                    <Input 
                        keyboardType={"decimal-pad"}
                        placeholder="enter Weight" label="Weight of baby"
                        leftIcon={{ type: "font-awesome", name: "weight-scale" }} size={40}
                        placeholderTextColor="#6FB3B8" labelColor="black" value={weight}
                        onChangeText={text =>setWeight(text)} />
                    <Text style={{ marginTop: '12%', fontSize: 14 }}>Kg</Text>
                </View>


                <View style={{flexDirection: 'row'}}>

                    <Input
                        keyboardType={"decimal-pad"}
                        placeholder="enter Height" label="Height of baby"
                        leftIcon={{ type: "material", name: "height" }} size={40}
                        placeholderTextColor="#6FB3B8" labelColor="black" value={height}
                        onChangeText={text=>setHeight(text)} />
                    <Text style={{ marginTop: '12%', fontSize: 14 }}>Cm</Text>
                </View>



                <View style={{marginTop: '6%', alignItems: 'center' }}>
                <TouchableOpacity style = {{backgroundColor: '#6FB3B8', width: 100, height: 40, alignItems: 'center',
          justifyContent:'center', borderRadius: 5,shadowColor: "#000",
          shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
          elevation: 8,}} onPress={()=>{checkTextInput()}}><Text style={{fontSize: 16, fontWeight: 'bold'}}>Add Baby</Text></TouchableOpacity>
                </View>

            </View>

            <Modal visible={showDate} animationType='fade'>
                <Calendar style={{ margin: 40, elevation: 4, borderRadius: 10 }} onDayPress={text => {
                    setshowDate(false),
                        setDate(text.dateString)
                }}
                //   hideArrows={true}
                ></Calendar>
            </Modal>

        </View>
    )
}

export default AddBaby;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,


    },
    container: {
        flex: 1,
        backgroundColor: '#C2EDCE',
        alignItems: 'center',
        padding: 10,
    }
})