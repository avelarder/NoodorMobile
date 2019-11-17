import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Icon } from 'react-native-elements';

export default function ShortcutContainer() {
    return (
        <View>
            <View style={styles.ShortcutRow}>
                <View style={styles.ShortcutRowIcon}>
                    <Icon
                        raised
                        name='heartbeat'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => console.log('hello')} />
                    <Text style={styles.ShortcutRowIconText}>Encuestas</Text>
                </View>
                <View style={styles.ShortcutRowIcon}>
                    <Icon
                        raised
                        name='heartbeat'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => console.log('hello')} />
                    <Text style={styles.ShortcutRowIconText}>Visitantes</Text>
                </View>
                <View style={styles.ShortcutRowIcon}>
                    <Icon
                        raised
                        name='heartbeat'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => console.log('hello')} />
                    <Text style={styles.ShortcutRowIconText}>Emergencias</Text>
                </View>

            </View>
            <View style={styles.ShortcutRow}>
                <View style={styles.ShortcutRowIcon}>
                    <Icon
                        raised
                        name='heartbeat'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => console.log('hello')} />
                    <Text style={styles.ShortcutRowIconText}>Correspondencia</Text>
                </View>
                <View style={styles.ShortcutRowIcon}>
                    <Icon
                        raised
                        name='heartbeat'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => console.log('hello')} />
                    <Text style={styles.ShortcutRowIconText}>Reservar</Text>
                </View>
                <View style={styles.ShortcutRowIcon}>
                    <Icon
                        raised
                        name='heartbeat'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => console.log('hello')} />
                    <Text style={styles.ShortcutRowIconText}>Participa</Text>
                </View>

            </View>
            <View style={styles.ShortcutRow}>
                <View style={styles.ShortcutRowIcon}>
                    <Icon
                        raised
                        name='heartbeat'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => console.log('hello')} />
                    <Text style={styles.ShortcutRowIconText}>Alquileres</Text>
                </View>
                <View style={styles.ShortcutRowIcon}>
                    <Icon
                        raised
                        name='heartbeat'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => console.log('hello')} />
                    <Text style={styles.ShortcutRowIconText}>Alertas</Text>
                </View>
                <View style={styles.ShortcutRowIcon}>
                    <Icon
                        raised
                        name='heartbeat'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => console.log('hello')} />
                    <Text style={styles.ShortcutRowIconText}>Avisos</Text>
                </View>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    ShortcutRow: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-evenly'

    },
    ShortcutRowIcon: {
        alignContent: 'center',
        justifyContent: 'center'
    },
    ShortcutRowIconText: {
        textAlign: 'center',
        fontSize: 10
    }

});