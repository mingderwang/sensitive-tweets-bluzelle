import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Button} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

// bluzelle
const { bluzelle } = require('bluzelle');
const config = require('./blz-config.js');
const gas_params = {'gas_price': '10.0'};
var bz;
var res;

export default function App() {
  const [tweet, setTweet] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  
  const onLogout = useCallback(() => {
    setTweet('undefined')
    main().then((t)=> {
      alert(t)
      setTweet(t)
    })
  }, []);
  
  return (
  <View style={styles.container}>
      {tweet !== 'undefined' ? (
        <View>
          <Text style={styles.title}>🐤 {tweet}</Text>
          <Button title="get the last sensitive tweet in bluzelle blockchain DB" onPress={onLogout} />
          <Text> </Text>
          <Text> @copyright 2020 MINGÐER 🧘‍♀️</Text>
        </View>
      ) : (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Random Sensible Tweets stored on bluzelle blockchain DB
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
    
const main = (async () => { 

          bz = await bluzelle({
          address: config.address,
          mnemonic: config.mnemonic,
          uuid: "demo-d",
          endpoint: config.endpoint,
          chain_id: config.chain_id
     });
     try
    {
         var count = await bz.count();
         console.log(count)
         var id = await bz.getNShortestLeases(count)
         console.log(id[count -1].key)
         console.log("@copyright 2020 MINGÐER 🧘‍♀️")
       //   res = await bz.create("test4", "awesome", gas_params);
       //   alert(res)
       //   console.log(typeof res != 'undefined' ? res : "success");
          res = await bz.read((id[count -1].key), false);
          return (typeof res != 'undefined' ? res : "success");

     } catch(e)
     {
          console.log(e)
          console.error(e.message);
     }
     })
     
