import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {connect} from 'react-redux'

import PlaceInput from '../../components/ListItems/PlaceInput'
import { addPlace } from '../../store/actions/index'

class SharePlaceScreen extends Component {
    placesAddedHandler = placeName => {
        this.props.onAddPlace(placeName)
    }

    render() {
        return (
            <View>
                <PlaceInput placeAdded={this.placesAddedHandler} />
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
