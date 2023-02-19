import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  ColorValue,
  ViewStyle,
  View,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
// import * as theme from '../theme';
const STATUSBAR_HEIGHT = getStatusBarHeight();

type Props = {
  center?: ViewStyle;
  middle?: ViewStyle;
  color?: ColorValue;
  children?: React.ReactNode;
  style?: ViewStyle;
};

const SafeArea = ({center, middle, color, children, style}: Props) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: color ? color : '#fff',
        },
      ]}>
      <View
        style={[
          style,
          center && styles.centerStyle,
          middle && styles.alignStyle,
          {
            flex: 1,
          },
        ]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? STATUSBAR_HEIGHT : 0,
  },
  centerStyle: {
    alignItems: 'center',
  },
  alignStyle: {
    justifyContent: 'center',
  },
});

export default SafeArea;
