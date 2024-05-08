import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function DetailsCourse({ route }) {
  const { video, image } = route.params;
  const navigation = useNavigation(); 

  const handlePlayVideo = () => {
    navigation.navigate('PlayVideo'); 
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{video.title}</Text>
      <Text style={styles.description}>{video.description}</Text>
      <Text style={styles.category}>Thể loại: {video.category}</Text>
      <Text style={styles.duration}>Thời lượng: {video.duration}</Text>
      <View style={styles.buttonContainer}> 
        <Button title='Phát' onPress={handlePlayVideo} /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 250,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
  },
  category: {
    marginBottom: 5,
  },
  duration: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 14, 
  },
});
