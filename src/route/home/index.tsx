import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screen/home';
import PremiumScreen from '../../screen/home/premium';
const HomeStack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator options={{headerShown: false}}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />

      {/*<HomeStack.Screen*/}
      {/*  name={'PremiumScreen'}*/}
      {/*  component={PremiumScreen}*/}
      {/*  options={{headerShown: false}}*/}
      {/*/>*/}
    </HomeStack.Navigator>
  );
};
export default HomeNavigation;
