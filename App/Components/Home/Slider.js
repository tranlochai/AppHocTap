import React, { useState, useRef } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const images = [
  require('../../Assets/Images/Header1.png'),
  require('../../Assets/Images/Header2.png'),
  require('../../Assets/Images/Header3.png'),
];

export default function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / 340); 
    setCurrentImageIndex(index);
  };

  const handlePress = (index) => {
    scrollViewRef.current.scrollTo({
      x: index * 340, 
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        scrollEnabled={true}
        pagingEnabled
        onMomentumScrollEnd={handleScroll}
      >
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(index)}
            activeOpacity={0.8}
          >
            <Image
              source={image}
              style={[
                styles.image,
                index === currentImageIndex && styles.activeImage,
              ]}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentImageIndex && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  scrollViewContent: {
    flexDirection: 'row',
  },
  image: {
    width: 335,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
  },
  activeImage: {
    borderWidth: 2,
    borderColor: 'blue',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
});
