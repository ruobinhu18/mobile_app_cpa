import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, } from 'react-native';

import AboutScreen from './About'
import RegistraionScreen from './Registration'
import BudgetScreen from './Budget'


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

      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
      <View style={{ flexDirection: 'row',
                     margin:"25px",
                     border:"thick solid black",
                     padding:'10px',
                     justifyContent: 'space-around', }}>

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
