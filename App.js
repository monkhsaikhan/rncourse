import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/ListItems/PlaceInput';
import Places from './src/components/ListItems/Places';
import placeImage from './src/assets/beautiful-place.jpg';

export default class App extends Component {

  state = {
    places: []
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(), 
          name: placeName,
          image: {
            uri: "https://images-na.ssl-images-amazon.com/images/I/41Ang4v0hTL._SX425_.jpg"
          }
        })
      }
    })
  }

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput placeAdded={this.placeAddedHandler} />
        <Places 
          places={this.state.places} 
          onItemDeleted={this.placeDeletedHandler} 
        />
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
  }
});
