import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Button, Input } from "react-native-elements";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchComp from "../component/SearchComp";
import { ScrollView } from "react-native-gesture-handler";

const DietPlanWaterIntake = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [newFilter, setNewFilter] = useState("");
    const [newData, setNewData] = useState([]);
    const [oldData, setOldData] = useState([]);
    const [search, setSearch] = useState('');
    const searchRef = useRef();


    const onSearch = (text) => {

        if (text == '') {
            setData(oldData);
        }
        else {
            let tempList = data.filter(item => {
                return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
            })
            setData(tempList);

        }

    }


    return (
        <View style={styles.container}>
            <View style={{ flex: 0.15, flexDirection: 'row' }}>
                <TouchableOpacity style={{ marginLeft: 40, marginRight: 40 }} onPress={() => navigation.navigate('BabyDetails')}>
                    <Ionicons name='ios-medkit-outline' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 40, marginRight: 40 }} onPress={() => navigation.navigate('DietPlanWaterIntake')}>
                    <Ionicons name='ios-nutrition-outline' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 40, marginRight: 40 }} onPress={() => navigation.navigate('Milestones')}>
                    <Ionicons name='ios-trophy-outline' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 40, marginRight: 40 }} onPress={() => navigation.navigate('DoctorConsultancy')}>
                    <Ionicons name='md-pulse' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                <Ionicons name='ios-search' size={25} color='black' style={{ margin: 5 }} />
                <TextInput
                    ref={searchRef}
                    placeholder="search item here...."
                    style={{ width: '90%', height: '70%', borderBottomWidth: 0 }}
                    value={search}
                    onChangeText={text => {
                        onSearch(text)
                        setSearch(text)
                    }}

                >
                </TextInput>
                {
                    search == '' ? null : (
                        <TouchableOpacity onPress={() => {
                            searchRef.current.clear()
                            onSearch('')
                            setSearch('')

                        }}>

                            <Ionicons name='ios-close' size={25} color='black' style={{ margin: 5 }} />

                        </TouchableOpacity>
                    )
                }
            </View>


            <View style={{
                flex: 0.55, marginTop: 70, alignItems: 'center', justifyContent: 'center', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, borderRadius: 20, alignItems: 'center', marginTop: 10, background: '#BADFE7', width: '80%', height: '100%',
            }} >
                <ScrollView style={{ margin: 30 }}>
                    <Text style={{ fontSize: 20, marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                        An infant needs 18 – 32 ounces of breast milk in his first 3 months.
                        You should increase the amount gradually and very slowly so that by the end of 3 months your child is fed with 32 ounces of milk approximately.
                        You should not add any kind of cereal or starchy food item to a baby who is below 3 months of age.
                        If your baby is younger than 12 months of age, no. Breast milk is comprised 87% of water and water is optional before one year of age.
                        An infant needs 18 – 32 ounces of breast milk in his first 3 months.
                        You should increase the amount gradually and very slowly so that by the end of 3 months your child is fed with 32 ounces of milk approximately.
                        You should not add any kind of cereal or starchy food item to a baby who is below 3 months of age.
                        If your baby is younger than 12 months of age, no. Breast milk is comprised 87% of water and water is optional before one year of age.
                        An infant needs 18 – 32 ounces of breast milk in his first 3 months.
                        You should increase the amount gradually and very slowly so that by the end of 3 months your child is fed with 32 ounces of milk approximately.
                        You should not add any kind of cereal or starchy food item to a baby who is below 3 months of age.
                        If your baby is younger than 12 months of age, no. Breast milk is comprised 87% of water and water is optional before one year of age.
                    </Text>
                </ScrollView>

            </View>
            <View style={{ flex: 0.10 }}>

                <TouchableOpacity style={{
                    width: 200, marginTop: 10, backgroundColor: '#6FB3B8', borderRadius: 20, justifyContent: 'center',
                    alignItems: 'center', height: 50, shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8,
                }}
                    onPress={() => navigation.navigate('customizeDietPlan')}><Text style={{ color: 'black', fontSize: 20 }}>Customize Diet Plan</Text></TouchableOpacity>


            </View>

            <View style={{
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

export default DietPlanWaterIntake;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#C2EDCE'
    }
})