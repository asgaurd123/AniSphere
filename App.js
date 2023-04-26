import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,

  },
  text: {
    color: 'white'
  }
});
