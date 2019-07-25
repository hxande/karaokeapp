import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image } from 'react-native';
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
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchField}
            placeholder='Buscar'
            onChangeText={text => this.searchFilter(text)}
            value={this.state.text}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.musicsContainer}>
          <FlatList
            data={this.state.musics}
            renderItem={({ item }) => (
              <View style={styles.musicCardContainer}>
                <View style={styles.infosContainer}>
                  <Text style={styles.textCode}>#{item.code}</Text>
                  <Text style={styles.textArtist}>{item.artist}</Text>
                  <Text style={styles.textSong}>{item.song}</Text>
                  <Text style={{marginLeft: 5}}>{item.lyrics}</Text>
                  <Text style={{marginLeft: 5}}>{item.language}</Text>
                </View>
                <View style={styles.avatarContainer}>
                  <Image
                    style={styles.musicAvatar}
                    source={{uri: 'https://api.adorable.io/avatars/285/abott@adorable.png'}}
                  />
                </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchContainer: {
    marginTop: 50,
    marginHorizontal: 5,
    height: 25
  },
  searchField: {
    fontSize: 20
  },
  musicsContainer: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 0.5
  },
  musicCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    borderWidth: 0.3,
    borderRadius: 5
  },
  infosContainer: {
    flex: 2,
  },
  textCode: {
    marginLeft: 5,
    color: '#00008b'
  },
  textArtist: {
    marginLeft: 5,
    color: '#191970',
    fontSize: 18,
    fontWeight: 'bold'
  },
  textSong: {
    marginLeft: 5,
    color: '#696969',
    fontSize: 12,
    fontWeight: 'bold'
  },
  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  musicAvatar: {
    height: 80,
    width: 80
  }
});