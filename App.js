
import { StyleSheet, StatusBar, SafeAreaView, Text, View, Image, Button } from 'react-native';
import Navbar from './components/Navbar';
import Post from './components/Post';



export default function App() {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Navbar />
        <Post />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B1E36',
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%'

  },
  text: {
    color: 'white'
  }
});
