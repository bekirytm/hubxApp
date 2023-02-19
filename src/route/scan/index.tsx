import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScanScreen from '../../screen/scan';
const ScanStack = createNativeStackNavigator();

const ScanNavigation = () => {
  return (
    <ScanStack.Navigator options={{headerShown: false}}>
      <ScanStack.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{headerShown: false}}
      />
    </ScanStack.Navigator>
  );
};
export default ScanNavigation;
