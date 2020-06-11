import React, { useCallback, useState } from 'react';
import { Linking, Text, View, StyleSheet, ActivityIndicator, Button} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

// bluzelle
import { bluzelle } from 'bluzelle/lib/bluzelle-js'
const config = require('./blz-config.js')
const gas_params = {'gas_price': '10.0'};
var link;

export default function App() {
  const [tweet, setTweet] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const openlink = useCallback(() => {
    Linking.openURL(link)
  },[])
  const play = useCallback(() => {
    setTweet('undefined')
        bluzelle({
          mnemonic: config.mnemonic,
          endpoint: config.endpoint,
          uuid: "demo-d",
          chain_id: config.chain_id
        }).then((t) => {
          t.count()
          .then(
            (count) => {
              t.getNShortestLeases(count)
              .then((id) => {
                t.read(id[count-1].key, false)
                .then(
                (res) => {
                  let result = (typeof res != 'undefined' ? res : "data retrive fail on read")
                  let ok = result.substr(1,result.length-1)
                  alert(ok)
                  setTweet(ok)
                  link = ok.substr(ok.lastIndexOf("https://t.co"))
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
          <Text style={styles.title}
          onPress={
            openlink
          }
          >🐤 {tweet}  👈 (click)
          </Text>
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
     
