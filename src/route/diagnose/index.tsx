import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DiagnoseScreen from '../../screen/diagnose';
const DiagnoseStack = createNativeStackNavigator();

const DiagnoseNavigation = () => {
  return (
    <DiagnoseStack.Navigator options={{headerShown: false}}>
      <DiagnoseStack.Screen
        name="DiagnoseScreen"
        component={DiagnoseScreen}
        options={{headerShown: false}}
      />
    </DiagnoseStack.Navigator>
  );
};
export default DiagnoseNavigation;
