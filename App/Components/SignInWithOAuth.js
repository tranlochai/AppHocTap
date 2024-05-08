import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import Colors from "../Shared/Colors";

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, [startOAuthFlow]);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <AntDesign name="google" size={24} color="white" style={{ marginRight: 10 }} />
      <Text style={{ color: Colors.white }}>Đăng nhập bằng tài khoản Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 1,
    borderRadius: 90,
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.8,
  },
});

export default SignInWithOAuth;
