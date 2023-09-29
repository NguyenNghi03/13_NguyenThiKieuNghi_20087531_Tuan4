import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view}></View>
      <Text style={styles.text1}>GROW</Text>
      <Text style={styles.text2}>YOUR BUSSINESS </Text>
      <Text style={styles.text3}>We will help you to grow your business using</Text>
      <Text style={styles.text4}>online server</Text>
      <View style={styles.button}>
        <Pressable style={styles.Button1}>
          <Text style={styles.text5}>Login</Text>
        </Pressable>
        <Pressable style={styles.Button2}>
          <Text style={styles.text5}>Sing up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4edbfb',
    alignItems: "center",
  },
  view:{
    marginTop:50,
    width: 150,
    height: 150,
    borderColor: '#333',
    borderWidth:15, 
    borderRadius:90,    
  },

  text1:{
    marginTop:50,
    alignItems: "center",
    fontSize:25,
    fontWeight:'bold',
  },
  text2:{
    alignItems: "center",
    fontSize:25,
    fontWeight:'bold',
  },
  text3:{
    marginTop:100,
    alignItems: "center",
    fontSize:20,
    fontWeight:'bold',
  },
  text4:{
    alignItems: "center",
    fontSize:20,
    fontWeight:'bold',
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 100,
  },
  Button1: {
    width:120,
    height:48,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10,
    backgroundColor: "#f3c000",
  },
  Button2: {
    width:120,
    height:48,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10,
    backgroundColor: "#f3c000",
    marginLeft:25,
  },
  text5:{
    fontSize: 25,
    textAlign: "center",
    fontWeight: 'bold'
  }
});
