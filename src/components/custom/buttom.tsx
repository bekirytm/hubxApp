import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

const CustomButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container]}>
      <Text style={styles.titleText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    backgroundColor: '#28AF6E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {fontWeight: 'bold', color: '#fff'},
});

export default CustomButton;
