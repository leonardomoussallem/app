import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("LOGIN");
  };
  const handleSignup = () => {
    navigation.navigate("SIGNUP");
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/tgmlogo.png")} style={styles.bannerImage}/>
      <Text style={styles.title}>Serviços e Assessoria.</Text>
      <Text style={styles.subTitle}>
        Gestão, Eficiência & Qualidade.

      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.loginButtonWrapper,
               { backgroundColor: colors.white, },
        ]}
        onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginButtonWrapper]} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Inscreva-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue,
        alignItems: "center",
    },
    bannerImage: {
        marginTop: 100,
        height: 200,
        width: 250,
        width: 231,
    },
    title: {
        fontSize: 32,
        fontFamily: fonts.Bold,
        textAlign: 'center',
        color: colors.white,
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    subTitle: {
      fontSize: 20,
      textAlign: "center",
      color: colors.gray,
      fontFamily: fonts.Medium,
      marginVertical: 20,
    },
    buttonContainer: {
      flexDirection: "row",
      marginTop: 70,
      borderWidth: 1,
      borderColor: colors.white,
      width:"85%",
      height: 60,
      borderRadius: 100,
    },
    loginButtonWrapper: {
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      borderRadius: 98,
    },
    loginButtonText:{
      fontSize: 18,
      color: colors.blue,
      fontFamily: fonts.SemiBold,
    },
    signupButtonText:{
      color: colors.white,
      fontFamily: fonts.SemiBold,
      fontSize: 18,
    },
});