import React, { useState } from "react";
import {View,StyleSheet,Button,Text} from 'react-native';
import {useValue} from './ValueContext'


const NamedCounter = ({value,label}) => {
  const {currentValue, setCurrentValue} = useValue();
  const updateData = () => {
    setCurrentValue({count:currentValue.count+1,
                     total:currentValue.total+value,
                   })
  }
  const [total,setTotal] = useState(0)

  return (
    <View style={
      {margin:10,
       width:'25%',
       justifyContent:'spaceBetween',
      }
     }>
      <Button
         title={label}
         onPress={()=>{
              setTotal(total+1)
              updateData()
            }}
      />
      <Text> {total} </Text>
      <Text> ${(total*value/100).toFixed(2)} </Text>

    </View>
  );
}

export default NamedCounter;
