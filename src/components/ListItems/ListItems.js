import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const listItem = (props) => {
    return <View style={styles.listItem}>
                <Text>{props.placeName}</Text>
            </View>
}

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        marginBottom: 5,
        backgroundColor: "#eee"
    }
})

export default listItem