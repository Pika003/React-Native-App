import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <Image source={require('./assets/Images/smartAi.png')} style={{width: 80, height: 80}} />
        </View>
      </View>
      <Text style={{marginTop: 100, fontSize: 50, fontWeight: 'bold', color: 'white'}}>FUN APP</Text>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#6cacde',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: '#57EC',
    padding: 50,
    borderRadius: 130
  },
  container3: {
    backgroundColor: '#57EBB9',
    padding: 40,
    borderRadius: 90
  }
});
