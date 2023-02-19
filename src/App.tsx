import React from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import Router from './route';
import {Provider} from 'react-redux';
import {store} from './store';
const {width} = Dimensions.get('window');
import {useDispatch, useSelector} from 'react-redux';
import MainStore, {setOnboarding} from './store/main.store';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {};

const App = () => {
  const theme = useTheme();

  const THEME = {
    dark: false,
    colors: theme.colors.background,
  };

  const App = () => {
    // const onboarding = useSelector(state => state.main.onboarding);
    // const dispatch = useDispatch();

    // dispatch(setOnboarding());

    // console.log(onboarding, 'asasasas------------------');

    return (
      <NavigationContainer>
        <Router theme={THEME} />
      </NavigationContainer>
    );
  };

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
