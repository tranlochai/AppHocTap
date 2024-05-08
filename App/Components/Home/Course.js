import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function Course({ title, images, onPressImage }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => onPressImage(image)}>
            <Image
              source={image}
              style={styles.image}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 5,
    marginTop: 5,
  },
});
