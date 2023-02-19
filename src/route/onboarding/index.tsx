import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../../screen/onboarding';
const OnboardingStack = createNativeStackNavigator();

const OnboardingNavigation = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{animationEnabled: false}}
      options={{headerShown: false}}>
      <OnboardingStack.Screen
        name="OnboardingHome"
        component={Onboarding}
        options={{headerShown: false}}
      />
    </OnboardingStack.Navigator>
  );
};
export default OnboardingNavigation;
