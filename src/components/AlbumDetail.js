import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View>
                    <Image source={{uri: props.album.thumbnail_image}}></Image>
                </View>
                <View style={styles.headerContentStyle}>
                    <Text>{props.album.artist}</Text>
                    <Text>{props.album.title}</Text>
                    <Text>{props.album.thumbnail_image}</Text>
                </View>
            </CardSection>
        </Card>
    )
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
}

export default AlbumDetail;
