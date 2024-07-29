import { View, Text, Button } from 'react-native'
import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FireBaseConfig';


interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const List = ({ navigation } : RouterProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={() => navigation.navigate('Detalhes')} title="Abrir Detalhes" />
        <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
    </View>
  )
}

export default List