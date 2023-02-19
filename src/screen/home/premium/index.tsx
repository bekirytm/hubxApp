import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  ActiveIcon,
  CloseIcon,
  FasterIcon,
  PassiveIcon,
  UnlimitedIcon,
} from '../../../components/icons';
import {CustomButton} from '../../../components/custom';
const {width, height} = Dimensions.get('window');

type Props = {navigation: any};

const PremiumScreen = (props: Props) => {
  const [selected, setSelected] = useState(null);
  const mockData = [
    {
      icon: <UnlimitedIcon />,
      title: 'Unlimited',
      description: 'Plant Identify',
    },
    {
      icon: <FasterIcon />,
      title: 'Faster',
      description: 'Process',
    },
    {
      icon: <UnlimitedIcon />,
      title: 'Unlimited',
      description: 'Plant Identify',
    },
    {
      icon: <FasterIcon />,
      title: 'Faster',
      description: 'Process',
    },
  ];

  const titleCard = () => {
    return (
      <View style={{paddingLeft: 20}}>
        <Text style={{fontSize: 27, color: '#fff', fontWeight: '200'}}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 27}}>
            PlantApp{' '}
          </Text>
          <Text>Premium</Text>
        </Text>
        <Text style={styles.titleText}>Access All Features</Text>
      </View>
    );
  };

  const scrollCard = () => {
    const card = (item, index) => {
      return (
        <View key={index} style={styles.cardStyle}>
          <View style={{height: '50%', paddingTop: 15, paddingLeft: 15}}>
            {item.icon}
          </View>
          <View style={{height: '50%', paddingLeft: 15}}>
            <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 20}}>
              Unlimited
            </Text>
            <Text style={{color: '#fff', marginTop: 5, fontWeight: '200'}}>
              Plant Identify
            </Text>
          </View>
        </View>
      );
    };

    return (
      <View style={{marginTop: 15}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{paddingLeft: 20}}>
          {mockData.map((item, index) => {
            return card(item, index);
          })}
        </ScrollView>
      </View>
    );
  };

  const optionCard = () => {
    const optionItem = (
      value: any,
      title: string,
      desc: string,
      badge?: false,
    ) => {
      return (
        <TouchableOpacity
          onPress={() => {
            setSelected(value);
          }}
          style={[
            {
              borderWidth: value === selected ? 1.5 : 0.5,
              borderColor:
                value === selected ? '#28AF6E' : 'rgba(255, 255, 255, 0.3)',
            },
            styles.buttonStyle,
          ]}>
          {badge && (
            <View style={styles.badgeArea}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 11}}>
                Save 50%
              </Text>
            </View>
          )}
          <View style={styles.iconArea}>
            {value === selected ? <ActiveIcon /> : <PassiveIcon />}
          </View>
          <View style={{justifyContent: 'center', width: '85%'}}>
            <Text style={{fontWeight: 'bold', fontSize: 14, color: '#fff'}}>
              {title}
            </Text>
            <Text style={styles.optionText}>{desc}</Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{paddingHorizontal: 20, marginTop: 30}}>
        {optionItem('month', '1 Month', '$2.99/month, auto renewable')}
        {optionItem(
          'year',
          '1 Year',
          'First 3 days free, then $529,99/year',
          true,
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Image
        source={require('../../../assets/images/plant.png')}
        style={{width: width, height: height * 0.6, position: 'absolute'}}
      />
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.closeButton}>
        <CloseIcon />
      </TouchableOpacity>

      <View style={{height: height * 0.33}} />
      <View
        style={{
          height: height * 0.67,
        }}>
        {titleCard()}
        {scrollCard()}
        {optionCard()}

        <View style={{paddingHorizontal: 20, marginTop: 20}}>
          <CustomButton
            title={'Try free for 3 days'}
            onPress={() => console.log('TRY FREE')}
          />

          <Text style={[styles.downText, {fontSize: 10}]}>
            After the 3-day free trial period you’ll be charged ₺274.99 per year
            unless you cancel before the trial expires. Yearly Subscription is
            Auto-Renewable
          </Text>

          <Text style={[styles.downText, {fontSize: 12}]}>
            Terms • Privacy • Restore
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#101e17',
  },
  downText: {
    fontWeight: '100',
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '200',
    marginTop: 5,
  },
  buttonStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    height: 60,
    marginBottom: 10,
    borderRadius: 14,
    flexDirection: 'row',
  },
  iconArea: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    width: 156,
    height: 130,
    borderRadius: 14,
    marginRight: 8,
  },
  optionText: {
    fontWeight: '200',
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },
  closeButton: {
    position: 'absolute',
    right: 11,
    top: 50,
    zIndex: 999999,
    padding: 5,
  },
  badgeArea: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 77,
    height: 26,
    backgroundColor: '#28AF6E',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 12,
    paddingLeft: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PremiumScreen;
