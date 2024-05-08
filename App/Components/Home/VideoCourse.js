import React from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import videos from './../DataVideo/DataVideos';

const videoCourseImages = [
  require('../../Assets/Images/VC1.png'),
  require('../../Assets/Images/VC2.png'),
  require('../../Assets/Images/VC3.png'),
  require('../../Assets/Images/VC4.png'),
  require('../../Assets/Images/VC5.png'),
  require('../../Assets/Images/bs1.png'),
  require('../../Assets/Images/bs2.png'),
  require('../../Assets/Images/bs3.png'),
  require('../../Assets/Images/bs4.png'),
  require('../../Assets/Images/bs5.png'),
  require('../../Assets/Images/ad1.png'),
  require('../../Assets/Images/ad2.png'),
  require('../../Assets/Images/ad3.png'),
  require('../../Assets/Images/ad4.png'),
  require('../../Assets/Images/ad5.png'),
];

export default function VideoCourse() {
  const navigation = useNavigation();

  const handlePressImage = (image) => {
    const index = videoCourseImages.indexOf(image);
    navigation.navigate('DetailsCourse', { video: videos[index], image });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => handlePressImage(item)}
        activeOpacity={0.8}
        style={styles.imageContainer}
      >
        <Image
          source={item}
          style={styles.image}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Video khoá học phổ biến</Text>
      <View style={styles.flatListContent}>
        <FlatList
          data={videoCourseImages}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={{ alignItems: 'center' }} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },

  imageContainer: {
    marginHorizontal: -14,
    marginTop: 5,
    marginLeft: 25,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
});
