import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../../screen/profile';
const ProfileStack = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <ProfileStack.Navigator options={{headerShown: false}}>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};
export default ProfileNavigation;
