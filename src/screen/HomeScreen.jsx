import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/tgmlogo.png")} style={styles.bannerImage}/>
      <Text style={styles.title}>Serviços e Assessoria.</Text>
      <Text style={styles.subTitle}>
        Gestão, Eficiência & Qualidade.

      </Text>
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
      fontSize: 15,
      textAlign: "center",
      color: colors.gray,
      fontFamily: fonts.Medium,

    }
});