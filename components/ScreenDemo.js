import React from "react";
import { SafeAreaView, View, Text, StyleSheet} from 'react-native'
import ScreenTemplate from '../containers/ScreenTemplate'
import ThreePartRow from '../containers/ThreePartRow'
import PhotoID from './PhotoId'


const Header = () => {
  return (
  <ThreePartRow
       left = {<Text style={{fontSize:24}}>Welcome</Text>}
      right = {<Text style={{fontSize:24}}> National Park </Text>}
    content = {<Text style={{fontSize:24}}>  </Text>}
  />
)}


const ScreenDemo = () => {
  return (
    <ScreenTemplate
        header={<Header />}
        footer={<Text  style={{fontSize:32}}>Trip Planner App </Text>}
    >
        <Text style={{fontSize:32}}>Top Attractions of a place</Text>
        <PhotoID
            name="Yosemite"
            imageurl="https://media.cntraveler.com/photos/5b71a3d92211d70d9158ae1a/16:9/w_3344,h_1881,c_limit/Yosemite_GettyImages-632167865.jpg"
        />
    </ScreenTemplate>
  )
}

const styles=StyleSheet.create({
  centeredElt:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  banner:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
})

export default ScreenDemo