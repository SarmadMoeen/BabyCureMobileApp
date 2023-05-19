import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from "react-native-modal";
import { Calendar } from "react-native-calendars";
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from 'expo-checkbox';
import axios from "axios";

const BabyDetails = ({ navigation }) => {

    const [vacc, setVacc] = useState("");
    const [showDate, setshowDate] = useState(false);
    const [date, setDate] = useState([]);
    const [data1, setData1] = useState([]);
    const [doneVacc, setDoneVacc] = useState([]);
    const [storeKey, setStoreKey] = useState([]);
    const [isSelected, setSelection] = useState(false);

    const [newData, setNewData] = useState([]);
    const [oldData, setOldData] = useState([]);
    const [newtitle, setNewtitle] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);




    let generateRandomNum = () => Math.floor(Math.random() * 1001);

    const data = [
        { 'key': '1', 'vaccname': 'BCG' },
        { 'key': '2', 'vaccname': 'OPV-0' },
        { 'key': '3', 'vaccname': 'Hep-B' },
        { 'key': '4', 'vaccname': 'OPV-I' },
        { 'key': '5', 'vaccname': 'Pneumococcal-I' },
        { 'key': '6', 'vaccname': 'Rotavirus-I' },
        { 'key': '7', 'vaccname': 'Pentavalent-I' },
        { 'key': '8', 'vaccname': 'OPV-II' },
        { 'key': '9', 'vaccname': 'Pneumococcal-II' },
        { 'key': '10', 'vaccname': 'Rotavirus-II' },
        { 'key': '11', 'vaccname': 'Pentavalent-II' },
        { 'key': '12', 'vaccname': 'OPV-III' },
        { 'key': '13', 'vaccname': 'Pneumococcal-III' },
        { 'key': '14', 'vaccname': 'IPV-I' },
        { 'key': '15', 'vaccname': 'Pentavalent-III' },
        { 'key': '16', 'vaccname': ' MR-I' },
        { 'key': '17', 'vaccname': 'Typhoid' },
    ]

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const onAddVacc = () => {

        if(vacc=="")
        {
            alert("cant add")
        }
        else
        {
            axios.post('http://10.135.64.128:3000/vaccinations',{
                key:generateRandomNum(),
                vaccname:vacc,
                date:date
            },[])
            var newDataObject = {
                key: generateRandomNum(),
                vaccname: vacc,
                date: date
            }
            setNewData([...newData, newDataObject])
        }
    
    }

 

    const onDeleteItem = (vaccname) => {

        const filterData = newData.filter(item => item.vaccname !== vaccname)
        setNewData(filterData)
    }

    const renderItemList = ({ item }) => {
        
        const onDoneVaccination = () => {
            const newDataObject = {
              key: item.key,
              vaccname: item.vaccname,
              date: item.date
            };
            setNewData(newData => newData.filter(newItem => newItem.key !== item.key));
            setDoneVacc(doneVacc => [...doneVacc, newDataObject]);
          };
          <renderItemList onDoneVaccination={onDoneVaccination} />

          

        return (
            <View style={{
                padding: 40, borderRadius: 1, backgroundColor: '#6FB3B8', height: -20, flex: 0.60, flexDirection: 'row', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, height: "5%", width: '100%', flexDirection: 'row'
            }}>

                <View style={{flex: 0.90, flexDirection: 'row'}}>
                    <Text style={{marginLeft: -30}}>{item.vaccname}</Text>
                    <Text style={{ paddingLeft: '10%' }}>{item.date}</Text>

                    <TouchableOpacity onPress={()=>{setStoreKey(item.key); onDoneVaccination()}}>
                    <CheckBox
  value={selectedItems.includes(item)}
  onValueChange={() => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
    onDoneVaccination(); // Call the function here
  }}
  style={{ marginLeft: 5 }}
/>
                    </TouchableOpacity>


                    <Text  style={{marginLeft: 10}}>Mark as done?</Text>
                    <TouchableOpacity onPress={() => { onDeleteItem(item.vaccname) }}>
                        <Text style={{ fontWeight: '900', fontSize: 20, marginLeft: 5}}> X</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
 
                  
                    {/* <Text style={{ marginLeft: '2%' }}>{isSelected ? onDoneVaccination : '👎'}</Text> */}



                </View>
            </View>

        )

    }
    const renderItemListDone = ({ item }) => {

        const onDoneVaccination = () => {
      const newDataObject = {
        key: item.key,
        vaccname: item.vaccname,
        date: item.date
      };
      setNewData(newData => newData.filter(newItem => newItem.key !== item.key));
      setdoneVacc(doneVacc => [...doneVacc, newDataObject]);
    };

        return (

           
            <View  style={{
                padding: 40, borderRadius: 1, backgroundColor: '#6FB3B8', height: -20, flex: 0.60, flexDirection: 'row', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, height: "5%", width: '100%', flexDirection: 'row'
            }}>

                <View style={{flex: 0.90, flexDirection: 'row'}}>
                    <Text >{item.vaccname}</Text>
                    <Text style={{ paddingLeft: '10%' }}>{item.date}</Text>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { onDeleteItem(item.vaccname) }}>
                        <Text style={{ fontWeight: '900', fontSize: 20, marginTop: '10%' }}> X</Text>
                    </TouchableOpacity>

                </View>
            </View>

        )

    }

    return (
        <View style={styles.container}>


            <View style={{ flex: 0.20, flexDirection: 'row' }}>
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

            <View style={{
                flex: 0.70, marginTop: 5, background: '#BADFE7', width: '100%', height: '100%', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, borderRadius: 20, alignItems: 'center'
            }}>


                <View style={{
                    flex: 0.40, marginTop: 10, background: '#6FB3B8', width: '90%', height: '100%', shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                    elevation: 8
                }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'normal', 
                    marginTop: 30 , marginLeft: 20 }}>Upcoming Vaccination</Text>
                    <FlatList
                        data={newData}
                        renderItem={renderItemList}
                    />
                </View>


                <View style={{
                    flex: 0.40, marginTop: 10, background: '#6FB3B8', width: '90%', height: '100%', 
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                    elevation: 8,
                }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'normal', 
                    marginTop: 3, marginLeft: 20 }}>Done Vaccination</Text>
                    <FlatList
                        data={doneVacc}
                        renderItem={renderItemListDone}
                    />
                </View>
                <View style={{flex: 0.30, alignItems: 'center', justifyContent: 'center' }}>

                    <TouchableOpacity onPress={toggleModal}>
                        <Ionicons name='ios-add-circle-outline' size={70} color='black' style={{ margin: 5 }} />
                    </TouchableOpacity>
                </View>

            </View>

            <Modal isVisible={isModalVisible}>

                <View style={{ flex: 0.90}}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                        (

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 0.50 }}>
                                    <Text style={{ fontSize: 14, color: 'white', marginTop: 10 }}>{item.vaccname}</Text>
                                </View>

                                <View style={{ flex: 0.50 }}>
                                    <TouchableOpacity onPress={() => { setshowDate(true); setVacc(item.vaccname); setStoreKey(item.key) }} >
                                        <Text style={{ fontSize: 14, color: 'yellow', marginTop: 10, marginLeft: 20 }}>Date</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        )
                        }
                    />

                </View>
                <View style={{ flex: 0.10, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { toggleModal(); onAddVacc() }} style={{
                        backgroundColor: '#C2EDCE', height: 40, width: 150,
                        alignItems: 'center', justifyContent: 'center', borderRadius: 10
                    }}><Text>Add Vaccnation</Text></TouchableOpacity>
                </View>

            </Modal>

            <Modal visible={showDate} animationType='fade'>
                <Calendar style={{ margin: 40, elevation: 4, borderRadius: 10 }} onDayPress={text => {
                    setshowDate(false),
                        setDate(text.dateString)
                }}
                //   hideArrows={true}
                ></Calendar>
            </Modal>

            <View style={{
                flex: 0.10, width: '100%', height: 100, backgroundColor: '#388087', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, flexDirection: 'row', marginTop: 30, alignItems: 'center', justifyContent: 'center'
            }}>

                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => navigation.navigate('homeScreen')}>
                    <FontAwesomeIcon name="home" size={30} style={{ padding: 10, marginLeft: 39, marginRight: 39 }} ></FontAwesomeIcon>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AddBaby')}>
                    <FontAwesomeIcon name="plus" size={30} style={{ padding: 10,marginLeft: 40, marginRight: 40 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PhysicalActivities')}>
                    <FontAwesomeIcon name="clipboard" size={30} style={{ padding: 10,marginLeft: 40, marginRight: 40 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('More')}>
                    <MaterialIcons name="more" size={30} style={{ padding: 10,marginLeft: 39, marginRight: 39 }} />
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default BabyDetails;
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