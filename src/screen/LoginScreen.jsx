import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FireBaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setloading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setloading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert('Login falhou: ' + error.message);
    } finally {
      setloading(false);
    }
  };


  const navigation = useNavigation();
  const [secureEntery, setSecureEntery] = useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleSignup = () => {
    navigation.navigate("SIGNUP");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons name="arrow-back-outline" color={colors.blue} size={25} />
      </TouchableOpacity>
      <View style={styles.textContanier}>
        <Text style={styles.headingText}>Olá! Seja</Text>
        <Text style={styles.headingText}>Bem-Vindo de Volta!</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={25} color={colors.white} />
          <TextInput
            style={styles.TextInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder='Digite o seu email'
            placeholderTextColor={colors.gray}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <SimpleLineIcons name="lock" size={25} color={colors.white} />
          <TextInput
            style={styles.TextInput}
            value={password}
            onChangeText={(password) => setPassword(password)}
            placeholder='Digite a sua senha'
            placeholderTextColor={colors.gray}
            secureTextEntry={secureEntery}
          />
          {loading ? 
            (<ActivityIndicator size="large" color="#0000ff" />) 
            : (
              <TouchableOpacity onPress={(signIn) => setSecureEntery((prev) => !prev)}>
                <SimpleLineIcons name="eye" size={20} color={colors.white} />
              </TouchableOpacity>
            )
          }
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>
            Esqueceu a Senha?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonWrapper} onPress={signIn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.continueText}>ou continue com</Text>
        <TouchableOpacity style={styles.googleButtonContainer}>
          <Image 
            source={require("../assets/google.png")} 
            style={styles.googleImage}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Não tem uma Conta?</Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.signupText}>Crie Agora</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

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
  continueText:{
    textAlign: "center",
    marginVertical: 1,
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: colors.white,
  },
  googleButtonContainer:{
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    gap: 10,
  },
  googleImage:{
    height: 35,
    width: 35,
  },
  googleText:{
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.SemiBold,
  },
  footerContainer:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 2,
  },
  accountText:{
    color: colors.white,
    fontFamily: fonts.Regular,
  },
  signupText:{
    color: colors.white,
    fontFamily: fonts.Bold,
  }
});
    