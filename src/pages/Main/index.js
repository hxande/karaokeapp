import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Main extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>MAIN</Text>    
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Musicas')}>
                    <Text>Musicas</Text>
                </TouchableOpacity>   
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});