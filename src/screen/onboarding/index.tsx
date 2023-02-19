import React, {useRef, useState} from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import OnboardingPage from '../../route/onboarding/page';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {setOnboarding} from '../../store/main.store';
const {height, width} = Dimensions.get('window');

const Onboarding = () => {
  const [activeDo, setActiveDo] = useState(0);
  const skipRef: React.LegacyRef<AppIntroSlider> = useRef();
  const onboarding = useSelector(state => state.main.onboarding);
  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    return <View>{item.component()}</View>;
  };

  const handleDone = async () => {
    // dispatch(setOnboarding());

    dispatch(setOnboarding('true'));
    await AsyncStorage.setItem('onboard', JSON.stringify(true));
    console.log(onboarding, 'ONBO');
  };

  const slides = [
    {
      key: 'one',
      component: () => (
        <OnboardingPage
          pageNumber={1}
          titleComp={() => {
            return (
              <View
                style={{
                  height: height * 0.2,
                  justifyContent: 'flex-end',
                  paddingHorizontal: 20,
                }}>
                <Text style={{fontSize: 28, fontWeight: '400'}}>
                  Welcome to{' '}
                  <Text style={{fontSize: 28, fontWeight: 'bold'}}>
                    PlantApp
                  </Text>
                </Text>

                <Text
                  style={{color: '#13231BB2', marginTop: 10, lineHeight: 22}}>
                  Identify more than 3000+ plants and {'\n'}88% accuracy.
                </Text>
              </View>
            );
          }}
          buttonText={'Get Started'}
          detail={'Identify more than 3000+ plants and 88% accuracy.'}
          nextPress={() => {
            skipRef.current.goToSlide(1);
            setActiveDo(1);
          }}
        />
      ),
    },
    {
      key: 'two',
      component: () => (
        <OnboardingPage
          pageNumber={2}
          titleComp={() => {
            return (
              <View
                style={{
                  height: height * 0.2,
                  justifyContent: 'flex-end',
                  paddingHorizontal: 20,
                }}>
                <Text style={{fontSize: 28, fontWeight: '400'}}>
                  Take a photo to{' '}
                  <Text style={{fontSize: 28, fontWeight: 'bold'}}>
                    identify{' '}
                  </Text>
                  the plant!
                </Text>

                <Text
                  style={{
                    color: '#13231BB2',
                    marginTop: 10,
                    lineHeight: 22,
                  }}></Text>
              </View>
            );
          }}
          detail={'two des'}
          buttonText={'Continue'}
          nextPress={() => {
            skipRef.current.goToSlide(2);
            setActiveDo(2);
          }}
        />
      ),
    },
    {
      key: 'three',
      component: () => (
        <OnboardingPage
          pageNumber={3}
          titleComp={() => {
            return (
              <View
                style={{
                  height: height * 0.2,
                  justifyContent: 'flex-end',
                  paddingHorizontal: 20,
                }}>
                <Text style={{fontSize: 28, fontWeight: '400'}}>
                  Get plant{' '}
                  <Text style={{fontSize: 28, fontWeight: 'bold'}}>
                    care guides
                  </Text>
                </Text>

                <Text
                  style={{color: '#13231BB2', marginTop: 10, lineHeight: 22}}>
                  {'\n'}
                </Text>
              </View>
            );
          }}
          buttonText={'Continue'}
          detail={'three desc'}
          nextPress={() => {
            handleDone();
          }}
        />
      ),
    },
  ];

  return (
    <>
      <AppIntroSlider
        renderPagination={() => {
          const activeDotCard = () => {
            return <View style={styles.enable} />;
          };

          const passiveDotCard = () => {
            return <View style={styles.disable} />;
          };
          return (
            (activeDo === 1 || activeDo === 2) && (
              <View style={styles.paginationArea}>
                {activeDo === 1 ? (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {passiveDotCard()}
                    {activeDotCard()}
                    {passiveDotCard()}
                  </View>
                ) : (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {passiveDotCard()}
                    {passiveDotCard()}
                    {activeDotCard()}
                  </View>
                )}
              </View>
            )
          );
        }}
        ref={skipRef}
        renderItem={renderItem}
        activeDotStyle={styles.enable}
        dotStyle={styles.disable}
        data={slides}
        showNextButton={false}
        onDone={handleDone}
        onSlideChange={index => setActiveDo(index)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  enable: {
    width: 10,
    height: 10,
    backgroundColor: '#13231B',
    borderRadius: 9999,
    marginHorizontal: 3,
  },
  disable: {
    width: 6,
    height: 6,
    backgroundColor: 'rgba(19, 35, 27, 0.25)',
    borderRadius: 9999,
    marginHorizontal: 3,
  },
  doneButtonStyle: {
    width: width / 4,
    height: 45,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  paginationArea: {
    position: 'absolute',
    bottom: height * 0.09,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Onboarding;
