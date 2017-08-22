import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// const AlbumList = () => {
//   return (
//     <View>
//       <Text>Album List</Text>
//     </View>
//   );
// };

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount(){
    var request = axios.get("https://rallycoding.herokuapp.com/api/music_albums")
    request.then(response => this.setState( { albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map((album) =>
      <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    console.log(this.state);

    return (
    <View>
      {this.renderAlbums()}
    </View>
    );
  };
}

export default AlbumList;
