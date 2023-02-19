import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainNavigation from './tab';
import PremiumScreen from '../screen/home/premium';
import OnboardingNavigation from './onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {setOnboarding} from '../store/main.store';

type Props = {};
const RootStack = createNativeStackNavigator();

const Router = () => {
  const onboarding = useSelector(state => state.main.onboarding);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchOnboard();
  }, []);

  const fetchOnboard = async () => {
    const fetch = await AsyncStorage.getItem('onboard');
    if (fetch === 'null' || fetch === null) {
      dispatch(setOnboarding('null'));
    } else {
      dispatch(setOnboarding('true'));
    }
  };

  console.log(onboarding, 'ONB');

  return (
    <RootStack.Navigator>
      {onboarding === 'null' ? (
        <RootStack.Screen
          name={'OnboardingPage'}
          component={OnboardingNavigation}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <>
          <RootStack.Screen
            name={'Main'}
            component={MainNavigation}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name={'PremiumScreen'}
            component={PremiumScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default Router;
