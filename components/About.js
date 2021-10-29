import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

// const App = () => {...}
export default function App() {
  return (
    <View style={styles.container}>

        <View style={{flex:2, flexDirection:'column',
              alignItems:'center',justifyContent:'space-around',backgroundColor:'yellow',}}>

              <Text style={styles.header}>
                  Trip Planner App
              </Text>

        </View>

        <View style={{flex:4, flexDirection:'row'}}>
          <Image style={{flex:1}} source={{uri:'https://www.visitgrandcanyon.com/~/media/images/grandcanyon/callouts/visitgrandcanyon-tn-home-canyon-vista.jpg'}} />
          <Text style={{flex:1,fontSize:32, backgroundColor:'lightgreen' }}>
              You can use this app to plan your trips! Add your budget, your preparation list, and finally you can share your experiences with others
          </Text>
          <View style={{flex:1}}>
              <Text style={styles.other}>
                    Enter your name and destination in the textfields below
              </Text>
              <TextInput style={{fontSize:32,backgroundColor:'yellow'}}
                         placeholder="your full name" />
              <TextInput style={{fontSize:32,backgroundColor:'yellow'}}
                         placeholder="your destination" />
              <Button style={styles.other} title="submit" color="red" />
          </View>

        </View>

      </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    flexDirection:'column',
    margin:'20px',
    border:'thick solid black',
  },

   header: {
      fontSize:64,
      color:'blue',


  },
  other: {
      fontSize:32,
      color:'blue',


  },

});
