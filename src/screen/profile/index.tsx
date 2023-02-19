import React from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
const {width} = Dimensions.get('window');

type Props = {};

const ProfileScreen = (props: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ProfileScreen;
