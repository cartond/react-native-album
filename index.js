//import library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

// create component
const App = () => {
    return (
        <View>
            <Header headerText={'Albums'}/>
            <AlbumList />
        </View>
    );
};

//render it to device
AppRegistry.registerComponent('albums', () => App)
