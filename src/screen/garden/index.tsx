import React from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
const {width} = Dimensions.get('window');

type Props = {};

const GardenScreen = (props: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>GardenScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default GardenScreen;
