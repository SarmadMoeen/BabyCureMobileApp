import React, { useState, useEffect, component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ChatScreen from './Screens/ChatScreen';
import fetch from './Screens/fetch';
import homeScreen from './Screens/homeScreen';
import AddBaby from './Screens/AddBaby';
import Activities from './Screens/Activities';
import More from './Screens/More';
import BabyDetails from './Screens/BabyDetails';
import BMICal from './Screens/BMICal';
import CommonProblems from './Screens/CommonProblems';
import DIYRemandRec from './Screens/DIYRemandRec';
import mainPage from './Screens/mainPage';
import mainPageChoose from './Screens/mainPageChoose';
import forgetPassword from './Screens/forgetPassword';
import customizeDietPlan from './Screens/customizeDietPlan';
import DietPlanWaterIntake from './Screens/DietPlanWaterIntake';
import Milestones from './Screens/Milestones';
import DoctorConsultancy from './Screens/DoctorConsultancy';
import PhysicalActivities from './Screens/PhysicalActivities';
import PhysicalActivitiesMain from './Screens/PhysicalActivitiesMain';
import Mother from './Screens/Mother';
import Quotes from './Screens/Quotes';
import showImage from './Screens/showImage';
import Chat from './Screens/Chat';
//import Profile from './Screens/Profile';
//import editProfile from './Screens/editProfile';
import Payment from './Screens/Payment';
import CommonProblemMain from './Screens/CommonProblemMain';
import DIYRemandRecMain from './Screens/DIYRemandRecMain';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Mother" component={Mother} />
      <Stack.Screen name="Chat" component={Chat} />


      <Stack.Screen name="LoginScreen" component={LoginScreen} />

      <Stack.Screen name="DoctorConsultancy" component={DoctorConsultancy} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="homeScreen" component={homeScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

         <Stack.Screen name="AddBaby" component={AddBaby} />  
     
      <Stack.Screen name="PhysicalActivities" component={PhysicalActivities} />

  
      <Stack.Screen name="BMICal" component={BMICal} />
      {/*<Stack.Screen name="editProfile" component={editProfile} />
        <Stack.Screen name="Profile" component={Profile} />*/}
        <Stack.Screen name="CommonProblemMain" component={CommonProblemMain} />
        <Stack.Screen name="DIYRemandRecMain" component={DIYRemandRecMain} />
      
        <Stack.Screen name="More" component={More} />
        <Stack.Screen name="CommonProblems" component={CommonProblems} />
        <Stack.Screen name="Quotes" component={Quotes} />
        <Stack.Screen name="showImage" component={showImage} options={{ headerShown: false }} />

       
        <Stack.Screen name="Milestones" component={Milestones} />

        <Stack.Screen name="mainPage" component={mainPage} />
 
        <Stack.Screen name="PhysicalActivitiesMain" component={PhysicalActivitiesMain} />
     

        <Stack.Screen name="DietPlanWaterIntake" component={DietPlanWaterIntake} />
        <Stack.Screen name="BabyDetails" component={BabyDetails} />

 
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="fetch" component={fetch} />
        <Stack.Screen name="customizeDietPlan" component={customizeDietPlan} />
        <Stack.Screen name="Activities" component={Activities} />
        <Stack.Screen name="DIYRemandRec" component={DIYRemandRec} />
        <Stack.Screen name="mainPageChoose" component={mainPageChoose} />
        <Stack.Screen name="forgetPassword" component={forgetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

