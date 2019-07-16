import React, { Component } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import data from '../../data.json';

export default class Musicas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      musics: [],
      arrayHolder: []
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
      musics: data,
      arrayHolder: data
    });
  }

  searchFilter(text) {
    const newData = this.state.arrayHolder.filter(function (item) {
      const itemDataArtist = item.artist ? item.artist.toUpperCase() : ''.toUpperCase();
      const itemDataSong = item.song ? item.song.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemDataArtist.indexOf(textData) > -1 || itemDataSong.indexOf(textData) > -1;
    });

    this.setState({
      musics: newData,
      text: text,
    });
  }

  static navigationOptions = {
    drawerLabel: 'MÚSICAS'
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder='Buscar'
          onChangeText={text => this.searchFilter(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
        />
        <View>
          <FlatList
            data={this.state.musics}
            renderItem={({ item }) => (
              <View>
                <Text>{item.code}</Text>
                <Text>{item.artist}</Text>
                <Text>{item.song}</Text>
                <Text>{item.lyrics}</Text>
                <Text>{item.language}</Text>
              </View>
            )}
            enableEmptySections={true}
            keyExtractor={item => item.code}
          />
        </View>
      </View>
    );
  }
}