import React, {useEffect, useState} from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


// const mph2fps = (mph) => mph*5280/3600

const TripCalculator = (props) => {
  const [hotel, setHotel] = useState("0");
  const [tax, setTax] = useState(0);
  const [taxRate,setTaxRate] = useState(props.taxRate)
  const [debugging,setDebugging] = useState(false)
  const [info, setInfo] = useState({taxRate:props.taxRate, hotel:0});


  useEffect(() => {getData()}
           ,[])

  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@budget_info')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setInfo(data)
            setTaxRate(data.taxRate)
            setHotel(data.hotel)
            console.log('just set Info, Name and Email')
          } else {
            console.log('just read a null value from Storage')
            setInfo({})
            setTaxRate(props.taxRate)
            setHotel("")
          }


        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
          // error reading value
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@budget_info', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }

  // clearAll calls AsyncStorate.clear to remove all local storage for this app
  // we could be more selective and only remove the profile_info, but for
  // debugging it is good to remove everything
  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }


  let debugView = ""
  if (debugging) {
    debugView =
      <View>
          <Text> hotel: {hotel} </Text>
          <Text> tax: {tax} </Text>
          <Text> taxRate: {taxRate} </Text>
          <Text> debugging: {debugging} </Text>
      </View>
  }

      return (
  <View style={styles.container}>
    <Text style={styles.header}>
       Budget Calculator for Hotel, default tax rate= {props.taxRate}
    </Text>
    <TextInput
          style={styles.textinput}
          placeholder="taxRate"
          onChangeText={text => {setTaxRate(text)}}
          value = {taxRate}
      />
    <TextInput
          style={styles.textinput}
          placeholder="cost of hotel"
          onChangeText={text => {setHotel(text)}}
          value ={hotel}
      />
    <Button
          color='red' title='Calculate Tax'
          onPress = {() => {
               setTax(parseFloat(hotel)*parseFloat(taxRate))


          }}
      />

      <Button
            color='red' title='Save Info to Memory'
            onPress = {() => {
                 console.log("saving profile");
                 const theInfo = {taxRate:taxRate, hotel:hotel}
                 console.log(`theInfo=${theInfo}`)
                 setInfo(theInfo)
                 console.log('data='+JSON.stringify(theInfo))
                 storeData(theInfo)
               }}
      />


      <Button
          color='green' title='Clear memory'
          onPress = {() => {
            console.log('clearing memory');
                        clearAll()
          }}
      />

    <Text> The tax is {tax} </Text>

    <Button
        title={(debugging?'hide':'show')+" debug info" }
        color="green"
        onPress = {() => setDebugging(!debugging)}
        />
        {debugView}
  </View>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      border: "thick solid red",
      margin:"20px",
      padding:"20px",
    },
    textinput:{
      margin:20,
      fontSize:20
    },
    header: {
      fontSize:40,
      color:'blue'
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default TripCalculator;
