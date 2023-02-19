import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  Image,
  View,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {ArrowRight, SearchIcon} from '../../components/icons';
import QuestionCard from './questions';
import CategoriesCard from './categories';
const {width} = Dimensions.get('window');

type Props = {
  navigation: any;
};

const HomeScreen = (props: Props) => {
  const [searchValue, setSearchValue] = useState('');

  const homeHeader = () => {
    return (
      <ImageBackground
        source={require('../../assets/images/homeBackground.png')}
        resizeMode={'stretch'}
        style={{
          width: '100%',
          height: 175,
          paddingTop: getStatusBarHeight(),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '90%',
            marginBottom: 10,
            height: 50,
            justifyContent: 'space-around',
          }}>
          <Text style={{fontSize: 16}}>Hi, plant lover!</Text>
          <Text style={{fontSize: 24, fontWeight: '500'}}>
            Good Afternoon! ⛅
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            height: 45,
            borderRadius: 12,
            width: '90%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '10%',
              height: 45,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SearchIcon width={15} height={15} />
          </View>
          <TextInput
            placeholderTextColor={'#AFAFAF'}
            placeholder={'Search for plants'}
            value={searchValue}
            onChangeText={text => setSearchValue(text)}
            style={{width: '90%', paddingLeft: 10}}
          />
        </View>
      </ImageBackground>
    );
  };

  const premiumCard = () => {
    return (
      <View
        style={{alignItems: 'center', height: 110, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('PremiumScreen')}
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#24201A',
            borderRadius: 12,
            height: 64,
          }}>
          <View
            style={{
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              resizeMode={'contain'}
              source={require('../../assets/images/messageImage.png')}
              style={{width: 45, height: 45}}
            />
          </View>
          <View
            style={{
              width: '65%',
              height: '60%',
              justifyContent: 'space-around',
            }}>
            <Text style={{color: '#E5C990', fontWeight: 'bold'}}>
              FREE Premium Available
            </Text>
            <Text numberOfLines={1} style={{color: '#E5C990'}}>
              Tap to upgrade your account!
            </Text>
          </View>
          <View
            style={{
              width: '15%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ArrowRight width={25} height={25} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    // <SafeArea>
    <View>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#FBFAFA'}}>
        {homeHeader()}
        {premiumCard()}
        <QuestionCard />
        <CategoriesCard />
      </ScrollView>
    </View>
    // </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
