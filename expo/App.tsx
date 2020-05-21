import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Button} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

// bluzelle
import { bluzelle } from 'bluzelle/lib/bluzelle-js'
const config = require('./blz-config.js')
const gas_params = {'gas_price': '10.0'};
var res;

export default function App() {
  const [tweet, setTweet] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const play = useCallback(() => {
        bluzelle({
          mnemonic: config.mnemonic,
          endpoint: config.endpoint,
          uuid: "demo-d",
          chain_id: config.chain_id
        }).then((t) => {
          t.count()
          .then(
            (count) => {
              console.log(count)
              t.getNShortestLeases(count)
              .then((id) => {
                console.log(id[count-1].key)
                t.read("1263142909542612994", false)
                .then(
                (res) => {
                  console.log(res)
                  let result = (typeof res != 'undefined' ? res : "data retrive fail on read")
                  alert(result)
                  setTweet(result)
                })
                .catch(error => { alert(error) });
              })
              .catch(error => { alert(error) });
            })
        }).catch(error => { alert(error) });
  },[]);
  
  return (
  <View style={styles.container}>
      {tweet !== 'undefined' ? (
        <View>
          <Text style={styles.title}>🐤 {tweet}</Text>
          <Text> </Text>
          <Button title="To get the latest sensitive tweet in bluzelle blockchain DB " onPress={play} />
          <Text> </Text>
          <Text>Need at least 2 BNT in bluzelle1phue773lhlk9e83kk8zgtspvsvmytl63p0rd50 address on Bluzelle TestNet</Text>
          <Text></Text>
          <Text>copyright ©2020 MINGÐER 🧘‍♀️</Text>
        </View>
      ) : (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Sensitive Tweets are stored on bluzelle TestNet DB: demo-d
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
      )}
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
     