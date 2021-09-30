import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Button from './Button';

export default () => {
  return (
    <SafeAreaView>
      <Text>Calculadora</Text>
      
      <View style={styles.buttons}>
        <Button label='AC' />
        <Button label='/' />
        <Button label='7' />
        <Button label='8' />
        <Button label='9' />
        <Button label='*' />
        <Button label='4' />
        <Button label='5' />
        <Button label='6' />
        <Button label='-' />
        <Button label='1' />
        <Button label='2' />
        <Button label='3' />
        <Button label='+' />
        <Button label='*' />
        <Button label='=' />
      </View>
      
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
  
  buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
  }
});