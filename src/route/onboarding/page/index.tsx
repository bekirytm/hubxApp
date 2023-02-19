import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  View,
  Text,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {CustomButton} from '../../../components/custom';
const STATUSBAR_HEIGHT = getStatusBarHeight();

type Props = {
  skipPress?: () => void;
  nextPress?: () => void;
  backPress?: () => void;
  buttonText?: string;
  titleComp?: any;
  pageNumber: number;
};

const OnboardingPage = (props: Props) => {
  const renderImage = pageNumber =>
    ({
      1: require('../../../assets/images/firstImage.png'),
      2: require('../../../assets/images/secondImage.png'),
      3: require('../../../assets/images/thirdImage.png'),
    }[pageNumber] || require('../../../assets/images/firstImage.png'));

  return (
    <View>
      <View style={styles.firstArea}>
        <CustomButton
          title={props.buttonText}
          onPress={() => props.nextPress()}
        />
      </View>
      {props.titleComp()}
      <ImageBackground
        resizeMode={'contain'}
        source={renderImage(props.pageNumber)}
        style={{width: width, height: height * 0.65}}
      />
      <View style={{height: height * 0.15, paddingHorizontal: 20}}>
        {props.pageNumber === 1 && (
          <Text style={styles.detailText}>
            By tapping next, you are agreeing to PlantID Terms of Use & Privacy
            Policy.
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height + STATUSBAR_HEIGHT,
  },
  firstArea: {
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    right: 0,
    bottom: height * 0.15,
    zIndex: 99999,
  },
  detailText: {
    fontSize: 11,
    fontWeight: '400',
    color: '#597165B2',
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});

export default OnboardingPage;
