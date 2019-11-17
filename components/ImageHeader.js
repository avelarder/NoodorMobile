import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';



export default function ImageHeader() {
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <Image
                    source={require('../assets/images/building_image_header.jpg')}
                    style={styles.newsThumbnail}>
                </Image>
                <Text style={styles.newsTitle}>Here is something new!</Text>
                <Text style={styles.newsAuthor}>by Arturo Velarde</Text>
            </View>
            <View style={styles.containerItem}>
                <Image
                    source={require('../assets/images/building_image_header.jpg')}
                    style={styles.newsThumbnail}>
                </Image>
                <Text style={styles.newsTitle}>Here is something new, medium text in title!</Text>
                <Text style={styles.newsAuthor}>by Arturo Velarde</Text>
            </View>
            <View style={styles.containerItem}>
                <Image
                    source={require('../assets/images/building_image_header.jpg')}
                    style={styles.newsThumbnail}>
                </Image>
                <Text style={styles.newsTitle}>Here is something new with a text really long to test the spacing feature in android devices!</Text>
                <Text style={styles.newsAuthor}>by Arturo Velarde</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: '50%'
    },
    containerItem: {
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 5,
        margin: 5,
        borderRadius: 3,
        
    },

    newsThumbnail: {
        width: '100%',
    },
    newsTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",
        fontSize: 10,
    },
    newsAuthor: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "normal",
        fontSize: 8
    }
});