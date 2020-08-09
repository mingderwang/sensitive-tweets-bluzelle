import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function LogoView() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        copyright of Logo ©2020 Bluzelle
      </Text>
      <Image style={styles.logo} source={require('../assets/Bluzelle_Logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
