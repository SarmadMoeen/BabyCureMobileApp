import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from "react-native-paper";
import Modal from "react-native-modal";
import { green, red } from "@mui/material/colors";






const DoctorConsultancy = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [newFilter, setNewFilter] = useState("");
    const [newData, setNewData] = useState([]);
    const [oldData, setOldData] = useState([]);
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    const listRef = useRef();

    const categories = [
        'Sort By Month', 'Sort by Name'
    ]

    const [ind, setInd] = useState(0)
    const [isModalVisible, setModalVisible] = useState(false);

    let generateRandomNum = () => Math.floor(Math.random() * 1001);


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

    const onAddFilter = () => {

        if (newFilter == "") {
            alert('Cant add');
        }

        else {
            console.log("in start")
            var newDataObject = {
                id: generateRandomNum,
                title: newFilter,
            }
            setNewData([...newData, newDataObject])
            console.log("in filter")

        }


    }

    const FilterClick = () => {
        let tempList = data.sort((a, b) =>
            a.title > b.title ? 1 : -1);
        setData(tempList);
        setNewFilter('Sort By Month')
        listRef.current.scrollToIndex({ animated: true, index: 0 })
    }
    const renderStars = (count) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
          stars.push(<FontAwesomeIcon key={i} name="star" size={14} color="gold" />);
        }
        return stars;
      };
      

    
    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        fetch('http://10.135.64.128:3000/getDoctorInfo')
            .then((response) => response.json())
            .then(response => {
                setData(response);
                setOldData(response)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);


    return (
        <View style={styles.container}>
            <View style={{ flex: 0.10, flexDirection: 'row' }}>
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
                    style={{ width: '75%', borderBottomWidth: 0, height: 40, fontSize: 20, backgroundColor: '#C2EDCE' }}
                    value={search}
                    onChangeText={text => {
                        onSearch(text)
                        setSearch(text)
                    }} />
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



            <View style={{ flex: 0.10, flexDirection: 'row' }}>
                {
                    categories.map((category, index) => (

                        <View key={index}>
                            <TouchableOpacity onPress={() => { FilterClick() }}>
                                <Text style={{
                                    padding: 10, borderWidth: 1,
                                    borderColor: 'black', borderRadius: 10, fontSize: 15, margin: 5
                                }}>{category}</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }

            </View>

            <View style={{ flex: 0.60 }}>
                
                <FlatList
                    initialScrollIndex={ind}
                    ref={listRef}
                    data={data}
                    renderItem={({ item }) =>
                    (
          
                        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                            <View style={{
                                borderWidth: 1, backgroundColor: '#6FB3B8', borderColor: 'grey',
                                flexDirection: 'row', shadowColor: "#000",
                                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                                elevation: 8, margin: 5
                            }}>

<View style={{ justifyContent: 'center' }}>
  {item.image ? (
    <Image source={{ uri: item.image }} style={{ width: 120, height: 160, margin: 8 }} />
  ) : (
    <MaterialIcons name="person" size={120} style={{ margin: 8 }} />
  )}
</View>


                                <View>
                                    <Text style={{ fontSize: 18, color: 'black', margin: 7, fontWeight: 'bold', width: '90%' }}>{item.name}</Text>
                                    <Text style={{ fontSize: 14, color: 'black', margin: 7, width: '90%' }}>{item.qualification}</Text>
                                    <Text style={{ fontSize: 14, color: 'black', margin: 7, width: '90%' }}>{item.specialization}</Text>
                                    <Text style={{ fontSize: 14, color: 'black', margin: 7, width: '90%' }}>{item.contactNo}</Text>
                                    <Text style={{ fontSize: 14, color: 'black', margin: 7, width: '90%' }}>{renderStars(item.review)}</Text>
                                    <Text style={{ fontSize: 14, color: 'black', margin: 7, width: '90%' }}>{item.charges}</Text>
                                    
                                </View>
                            </View>
                            </TouchableOpacity>
                    )} />

            </View>


            <View style={{
                flex: 0.10, width: '100%', height: "100%", backgroundColor: '#388087', shadowColor: "#000",
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

export default DoctorConsultancy;
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