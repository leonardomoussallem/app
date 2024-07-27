import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FireBaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setloading] = useState(false);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();
  const [secureEntery, setSecureEntery] = useState(true);

  const signUp = async () => {
    setloading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Cheque seu Email');
    } catch (error) {
      console.log(error);
      alert('Registro falhou: ' + error.message);
    } finally {
      setloading(false);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleLogin = () => {
    navigation.navigate("LOGIN");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons name="arrow-back-outline" color={colors.blue} size={25} />
      </TouchableOpacity>
      <View style={styles.textContanier}>
        <Text style={styles.headingText}>Olá!</Text>
        <Text style={styles.headingText}>Vamos Começar?</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={25} color={colors.white} />
          <TextInput
            style={styles.TextInput}
            placeholder='Digite o seu email'
            placeholderTextColor={colors.gray}
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={styles.inputContainer}>
          <SimpleLineIcons name="lock" size={25} color={colors.white} />
          <TextInput
            style={styles.TextInput}
            placeholder='Digite a sua senha'
            placeholderTextColor={colors.gray}
            secureTextEntry={secureEntery}
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity onPress={(signUp) => setSecureEntery(prev => !prev)}>
            <SimpleLineIcons name="eye" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <SimpleLineIcons name="screen-smartphone" size={25} color={colors.white} />
          <TextInput
            style={styles.TextInput}
            placeholder='Digite o seu número'
            placeholderTextColor={colors.gray}
            secureTextEntry={secureEntery}
            keyboardType='phone-pad'
          />
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <TouchableOpacity onPress={signUp} style={styles.loginButtonWrapper}>
            <Text style={styles.loginText}>Inscreva-se</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.continueText}>ou continue com</Text>
        <TouchableOpacity style={styles.googleButtonContainer}>
          <Image 
            source={require("../assets/google.png")} 
            style={styles.googleImage}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Já tem uma Conta?</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    padding: 20,
  },
  backButtonWrapper: {
    height: 35,
    width: 35,
    backgroundColor: colors.gray,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  textContanier: {
    marginVertical: 20,
  },
  headingText: {
    fontSize: 25,
    color: colors.white,
    fontFamily: fonts.SemiBold,
  },
  formContainer: {
    marginTop: 1,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 1,
    marginVertical: 10,
  },
  TextInput: {
    flex: 1,
    paddingHorizontal: 20,
    color: colors.white,
    fontFamily: fonts.Light,
  },
  forgotPasswordText: {
    textAlign: "right",
    color: colors.white,
    fontFamily: fonts.SemiBold,
    marginVertical: 10,
  },
  loginButtonWrapper: {
    backgroundColor: colors.white,
    borderRadius: 100,
    marginVertical: 20,
  },
  loginText: {
    color: colors.blue,
    fontSize: 20,
    fontFamily: fonts.SemiBold,
    textAlign: "center",
    padding: 8,
  },
  continueText: {
    textAlign: "center",
    marginVertical: 1,
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: colors.white,
  },
  googleButtonContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    gap: 10,
  },
  googleImage: {
    height: 35,
    width: 35,
  },
  googleText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.SemiBold,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 2,
  },
  accountText: {
    color: colors.white,
    fontFamily: fonts.Regular,
  },
  signupText: {
    color: colors.white,
    fontFamily: fonts.Bold,
  }
});
