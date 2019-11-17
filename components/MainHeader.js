import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Avatar } from 'react-native-elements';

export default function MainHeader() {
    return (
        <View style={styles.header}>
            <View style={{ flex: 1 }}>
                <Avatar
                    source={{
                        uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    }}
                    showEditButton
                />
                <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Oscar</Text>
            </View>
            <View style={{ flex: 4, alignItems: 'flex-start', justifyContent: 'center',  }}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>La Floresta</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:'#fbfbfb',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginLeft: 5,
        flexDirection: "row"
    }

});