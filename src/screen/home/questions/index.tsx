import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  ImageBackground,
  Text,
  ScrollView,
} from 'react-native';
import axios from 'axios';
const {width} = Dimensions.get('window');

type Props = {};

const QuestionCard = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(() => setLoading(false));
  }, []);

  const fetchData = async () => {
    await axios
      .get('https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions')
      .then(x => setData(x.data))
      .catch(err => console.log(err, 'ERR'));
  };

  const scrollItem = (item: object, index: number) => {
    return (
      <ImageBackground
        key={index}
        source={{uri: item.image_uri}}
        borderRadius={12}
        style={styles.imageBack}>
        <View style={styles.imageArea}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>{item.title}</Text>
        </View>
      </ImageBackground>
    );
  };

  return loading ? (
    <View />
  ) : (
    <View>
      <View style={{marginLeft: width * 0.05, marginBottom: 20}}>
        <Text style={{fontWeight: 'bold'}}>Get Started</Text>
      </View>

      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{paddingLeft: width * 0.05}}>
          {data?.map((item, index) => {
            return scrollItem(item, index);
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  imageBack: {
    width: 240,
    height: 164,
    marginRight: 10,
    justifyContent: 'flex-end',
  },
  imageArea: {
    width: '100%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    height: 64,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
});

export default QuestionCard;
