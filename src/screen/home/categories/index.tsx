import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import axios from 'axios';
const {width} = Dimensions.get('window');

type Props = {};

const CategoriesCard = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(() => setLoading(false));
  }, []);

  const fetchData = async () => {
    await axios
      .get('https://dummy-api-jtg6bessta-ey.a.run.app/getCategories')
      .then(x => setData(x.data.data))
      .catch(err => console.log(err, 'ERR'));
  };

  const wrapItem = (item, index) => {
    return (
      <View
        key={index}
        style={[
          {
            marginRight: index % 2 === 0 ? width * 0.06 : 0,
          },
          styles.wrapArea,
        ]}>
        <ImageBackground
          borderRadius={12}
          source={{uri: item.image.url}}
          style={{
            width: width * 0.35,
            height: width * 0.35,
          }}></ImageBackground>
        <View style={{position: 'absolute', left: 15, top: 15, width: '55%'}}>
          <Text numberOfLines={2} style={{fontWeight: 'bold'}}>
            {item.title}
          </Text>
        </View>
      </View>
    );
  };

  return loading ? (
    <View />
  ) : (
    <View style={{alignItems: 'center', marginTop: 30}}>
      <View
        style={{
          width: '90%',
          alignItems: 'space-between',
        }}>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          {data.map((item, index) => {
            return wrapItem(item, index);
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  wrapArea: {
    width: width * 0.42,
    height: width * 0.42,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    marginBottom: width * 0.06,
    borderRadius: 12,
    borderColor: 'rgba(41, 187, 137, 0.18)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default CategoriesCard;
