import React from 'react';
import { View, StyleSheet, Text, FlatList, } from 'react-native';

const PARKS = ['Great Smoky Mountains', 'Grand Canyon National Park', 'Yosemite National Park', 'Rocky Mountain National Park', 'Zion National Park','Yellowstone National Park','Olympic National Park',
'Acadia National Park','Grand Teton National Park','Glacier National Park'];

export default function App() {
  return (

    <View style={styles.container}>

      <FlatList
        data={PARKS}
        renderItem={(parks) => {
          return (
            <View style={styles.listItem}>
              <Text>{parks.item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    paddingTop: 100,
  },
  listItem: {
    backgroundColor: 'orange',
    borderWidth: 1,
    borderColor: '#333',
    padding: 25,
  }
});