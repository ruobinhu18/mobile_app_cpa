import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

import AboutScreen from './About'
import RegistraionScreen from './Registration'
import BudgetScreen from './Budget'
import PopularScreen from './Popular'
import ScreenDemoScreen from './ScreenDemo'



const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Trip Planner' }}
        />

        <Stack.Screen name="About" component={AboutScreen} />

        <Stack.Screen name="Registration" component={RegistraionScreen} />

        <Stack.Screen name="Budget" >
            {props => <BudgetScreen {...props} taxRate={0.3} component={BudgetScreen} />}

        </Stack.Screen>
          <Stack.Screen name="Popular" component={PopularScreen} />

          <Stack.Screen name="ScreenDemo" component={ScreenDemoScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
      <View style={{ flexDirection: 'column',
                     justifyContent: 'space-between', }}>

        <Button
          title="Go to About"
          onPress={() =>
            navigation.navigate('About')
          }
        />


        <Button
          title="Registration for the app"
          onPress={() =>
            navigation.navigate('Registration')
          }
        />

        <Button
          title="Calculate the budget for the trip"
          onPress={() =>
            navigation.navigate('Budget')
          }
        />

         <Button
          title="Description of a place"
          onPress={() =>
            navigation.navigate('ScreenDemo')
          }
        />
        <TouchableOpacity
            onPress={() =>
            navigation.navigate('Popular')
          }

        >
               <Text style={{color:'blue', fontSize:20}}> {"Top national parks"}</Text>

             </TouchableOpacity>



    </View>
  );
};

// // ProfileScreen function is called with a JSON object
// //  {navigation:..., route:...,  otherstuff}
// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>{route.params.greeting}, this is {route.params.name}'s profile</Text>;
//        // we're using the parameter name passed in from the HomeScreen
// };

export default MyStack;
