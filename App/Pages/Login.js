import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Colors from '../Shared/Colors';
import login1 from './../Assets/Images/login3.png';
import SignInWithOAuth from '../Components/SignInWithOAuth';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={login1} style={styles.appImage} />
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Chào bạn đến với khoá học!</Text>
        <Text style={styles.subtitle1}>Biết nhiều hơn về lập trình & công nghệ tương lai để viết nên câu chuyện của bạn!</Text>
        <SignInWithOAuth/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.gray,
    paddingTop: 0,
  },
  appImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.63,
    resizeMode: 'cover',
  },
  textContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginTop: 170, 
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '42%', 
    position: 'absolute',
    top: Dimensions.get('window').height * 0.4,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 150, 
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 60, 
  },
  subtitle1: {
    fontSize: 20,
    marginTop: -140,
    marginBottom: 90, 
    fontWeight: "200",
    fontStyle: "italic",
    textAlign: "center",
  },
});

export default Login;
