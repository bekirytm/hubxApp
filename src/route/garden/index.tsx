import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GardenScreen from '../../screen/garden';
const GardenStack = createNativeStackNavigator();

const GardenNavigation = () => {
  return (
    <GardenStack.Navigator options={{headerShown: false}}>
      <GardenStack.Screen
        name="GardenScreen"
        component={GardenScreen}
        options={{headerShown: false}}
      />
    </GardenStack.Navigator>
  );
};
export default GardenNavigation;
