import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount(){
        // axios.get('~/albums.json')
            // .then(response => console.log(response));
        albumList = [     {         "title": "Yeezus",         "artist": "Kanye West",         "url": "https://www.amazon.com/Yeezus-Explicit-Kanye-West/dp/B00DF0POXA/ref=sr_1_3?ie=UTF8&qid=1549055830&sr=8-3&keywords=kanye+west",         "image": "https://images-na.ssl-images-amazon.com/images/I/51B5aBBGYlL._AC_US436_FMwebp_QL65_.jpg",         "thumbnail_image": "https://i.imgur.com/bDWBOg4.png"     },     {         "title": "MBDTF",         "artist": "Kanye West",         "url": "https://www.amazon.com/Yeezus-Explicit-Kanye-West/dp/B00DF0POXA/ref=sr_1_3?ie=UTF8&qid=1549055830&sr=8-3&keywords=kanye+west",         "image": "https://images-na.ssl-images-amazon.com/images/I/41m+gasD2YL._AC_US436_FMwebp_QL65_.jpg",         "thumbnail_image": "https://i.imgur.com/bDWBOg4.png"     },     {         "title": "ye",         "artist": "Kanye West",         "url": "https://www.amazon.com/Yeezus-Explicit-Kanye-West/dp/B00DF0POXA/ref=sr_1_3?ie=UTF8&qid=1549055830&sr=8-3&keywords=kanye+west",         "image": "https://images-na.ssl-images-amazon.com/images/I/51iXBO4-+pL._AC_US436_FMwebp_QL65_.jpg",         "thumbnail_image": "https://i.imgur.com/bDWBOg4.png"     },     {         "title": "Graduation",         "artist": "Kanye West",         "url": "https://www.amazon.com/Yeezus-Explicit-Kanye-West/dp/B00DF0POXA/ref=sr_1_3?ie=UTF8&qid=1549055830&sr=8-3&keywords=kanye+west",         "image": "https://images-na.ssl-images-amazon.com/images/I/51XbeIRKznL._AC_US436_FMwebp_QL65_.jpg",         "thumbnail_image": "https://i.imgur.com/bDWBOg4.png"     } ]
        this.setState({ albums: albumList });
    }

    renderAlbums(){
        return this.state.albums.map( album => <AlbumDetail key={album.title} album={album} /> );
    }

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}

export default AlbumList;