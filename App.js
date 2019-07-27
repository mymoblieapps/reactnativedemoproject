import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  return (
    <View style={styles.container}>
    
      <Text>Hello World!! This is my first app.</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
