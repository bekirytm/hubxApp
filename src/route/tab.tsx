import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from './home';
import DiagnoseNavigation from './diagnose';
import ScanNavigation from './scan';
import GardenScreen from '../screen/garden';
import ProfileNavigation from './profile';
import {
  DiagnoseIcon,
  GardenIcon,
  HomeIcon,
  ProfileIcon,
  ScanButtonIcon,
} from '../components/icons';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Home'}
        component={HomeNavigation}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text style={styles.activeTitle}>Home</Text>
            ) : (
              <Text style={styles.passiveTitle}>Home</Text>
            ),
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <HomeIcon
                width={17}
                height={17}
                color={'#28AF6E'}
                style={{marginBottom: 3}}
              />
            ) : (
              <HomeIcon
                color={'#BDBDBD'}
                width={17}
                height={17}
                style={{marginBottom: 3}}
              />
            ),
        }}
      />
      <Tab.Screen
        name={'Diagnose'}
        component={DiagnoseNavigation}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text style={styles.activeTitle}>Diagnose</Text>
            ) : (
              <Text style={styles.passiveTitle}>Diagnose</Text>
            ),
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <DiagnoseIcon
                width={17}
                height={17}
                color={'#28AF6E'}
                style={{marginBottom: 3}}
              />
            ) : (
              <DiagnoseIcon
                color={'#BDBDBD'}
                width={17}
                height={17}
                style={{marginBottom: 3}}
              />
            ),
        }}
      />
      <Tab.Screen
        name={' '}
        component={ScanNavigation}
        options={{
          tabBarButton: props => (
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                {...props}
                style={{
                  marginBottom: 20,
                  position: 'absolute',
                  bottom: 0,
                  left: -12,
                }}>
                <ScanButtonIcon />
              </TouchableOpacity>
              <View style={{width: 50}}>
                <Text></Text>
              </View>
            </View>
          ),
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <DiagnoseIcon
                width={17}
                height={17}
                color={'#28AF6E'}
                style={{marginBottom: 3}}
              />
            ) : (
              <DiagnoseIcon
                color={'#BDBDBD'}
                width={17}
                height={17}
                style={{marginBottom: 3}}
              />
            ),
        }}
      />
      <Tab.Screen
        name={'My Garden'}
        component={GardenScreen}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text style={styles.activeTitle}>My Garden</Text>
            ) : (
              <Text style={styles.passiveTitle}>My Garden</Text>
            ),
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <GardenIcon
                width={17}
                height={17}
                color={'#28AF6E'}
                style={{marginBottom: 3}}
              />
            ) : (
              <GardenIcon
                color={'#BDBDBD'}
                width={17}
                height={17}
                style={{marginBottom: 3}}
              />
            ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileNavigation}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text style={styles.activeTitle}>Profile</Text>
            ) : (
              <Text style={styles.passiveTitle}>Profile</Text>
            ),
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <ProfileIcon
                width={17}
                height={17}
                color={'#28AF6E'}
                style={{marginBottom: 3}}
              />
            ) : (
              <ProfileIcon
                color={'#BDBDBD'}
                width={17}
                height={17}
                style={{marginBottom: 3}}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTitle: {
    fontSize: 11,
    color: '#28AF6E',
  },
  passiveTitle: {
    fontSize: 11,
    color: '#979798',
  },
});

export default MainNavigation;
