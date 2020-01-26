import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants'

import CardList from './components/CardList';

const items = [
  { id: 10, author: 'Bob Ross' },
  { id: 11, author: 'Conchi Molina' },
  { id: 12, author: 'Ernesto' },
  { id: 13, author: 'Chuck Norris' },
  { id: 14, author: 'Jaime Gonzalez' },
  { id: 15, author: 'Victor Molina' },
  { id: 16, author: 'Leo' },
  { id: 17, author: 'Maria Gomez' },
  { id: 18, author: 'Emma Watson' },
  { id: 19, author: 'Chuck Norris' },
  { id: 20, author: 'Bob Ross' },
  { id: 21, author: 'Chuck Norris' },
  { id: 22, author: 'Bob Ross' },
  { id: 23, author: 'Chuck Norris' },
  { id: 24, author: 'Ruben' },
  { id: 25, author: 'Sara Prieto' },
  { id: 26, author: 'Francisco' },
  { id: 27, author: 'Thomas Shelby' },
  { id: 28, author: 'Bob Ross' },
  { id: 29, author: 'Chuck Norris' },
  { id: 30, author: 'Bob Ross' },
  { id: 31, author: 'Conchi Molina' },
  { id: 32, author: 'Ernesto' },
  { id: 33, author: 'Chuck Norris' },
  { id: 34, author: 'Jaime Gonzalez' },
  { id: 35, author: 'Victor Molina' },
  { id: 36, author: 'Leo' },
  { id: 37, author: 'Maria Gomez' },
  { id: 38, author: 'Emma Watson' },
  { id: 39, author: 'Chuck Norris' },
  { id: 40, author: 'Bob Ross' },
  { id: 41, author: 'Chuck Norris' },
  { id: 42, author: 'Bob Ross' },
  { id: 43, author: 'Chuck Norris' },
  { id: 44, author: 'Ruben' },
  { id: 45, author: 'Sara Prieto' },
  { id: 46, author: 'Francisco' },
  { id: 47, author: 'Thomas Shelby' },
  { id: 48, author: 'Bob Ross' },
  { id: 49, author: 'Chuck Norris' },
]

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardList items={items} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
