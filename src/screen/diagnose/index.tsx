import React from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
const {width} = Dimensions.get('window');

type Props = {};

const DiagnoseScreen = (props: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>DiagnoseScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default DiagnoseScreen;
