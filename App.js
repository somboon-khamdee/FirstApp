import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert, Button, TextInput } from 'react-native';
import Styles from './common-styles';
import CommonLayouts from './common-layouts';
import TextInputDemo from './text-input-demo';
import CommonProduct from './product';

export default function App() {
  const onPressButton1 = () => {
    Alert.alert('Link Start')
  }
  return (
    <View style={styles.container} >
      {/*<Text style={styles.textColor}>Welcome Sir.</Text>*/}
      {/*<Button title="คลิกที่นี่" onPress={onPressButton1}></Button>*/}
      {/*<TextInput style={styles.input} placeholder='กรุณากรอกรหัสประจำตัว'></TextInput>*/}
      {/*<TextInput style={styles.input} placeholder='กรุณากรอกชื่อ-นามสกุล' keyboardType='number-pad'></TextInput>*/}
      {/*<TextInputDemo />*/}
      <CommonProduct ></CommonProduct>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a150',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: 'yellow',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
});
/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#339999',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textbold: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    textRedbold: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
});
*/