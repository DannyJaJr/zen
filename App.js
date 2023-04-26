import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Zen from './controllers/Zen';
//import record from './controllers/record';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Zen /> */}
      {/* <record /> */}
     
      <Text>Heeloo world</Text>
      <StatusBar style="auto" />
      
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
