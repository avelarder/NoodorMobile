import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';

import ImageHeader from './ImageHeader';

export default function NewsSwipper() {
    return (
        <View>
            <Text style={ styles.newsTitle }>Lo nuevo...</Text>
            <ScrollView horizontal={true}> 
                <ImageHeader></ImageHeader>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    newsTitle :{
        fontSize: 14,
        fontWeight : "bold",
        marginLeft: 5
    }
});