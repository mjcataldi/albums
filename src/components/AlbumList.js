import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// const AlbumList = () => {
//   return (
//     <View>
//       <Text>Album List</Text>
//     </View>
//   );
// };

class AlbumList extends Component {
  componentWillMount(){
    var request = axios.get("https://rallycoding.herokuapp.com/api/music_albums")
    request.then(response => console.log(response.data[0]));

    // console.log("Component will mount in album list");
    // debugger;
  }

  render() {
    return (
    <View>
      <Text>Album List</Text>
    </View>
    );
  };
}

export default AlbumList;
