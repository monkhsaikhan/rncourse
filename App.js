/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItems/ListItems';

export default class App extends Component {

  state = {
    placeName: '',
    places: []
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    })
  };

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });

  };

  render() {
    const placesOutput = this.state.places.map((place, i) => {
      return <ListItem key={i} placeName={place} />
    })
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            value={this.state.placeName} 
            placeholder="Awesome place"
            onChangeText={this.placeNameChangedHandler}
            style={styles.placeInput} />
          <Button 
            title="Add" 
            style={styles.placeButton} 
            onPress={this.placeSubmitHandler} />
        </View>
        <View style={styles.listContainer}>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});
