import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
export default function Columnlayouts() {
    return (
        <View style={styles.container}>
            <View style={styles.layout1}>
                <center><Text style={styles.text}>Pink</Text></center>
            </View>
            <View style={styles.layout2}>
                <center><Text style={styles.text}>Orange</Text></center>
            </View>
            <View style={styles.layout3}>
                <center><Text style={styles.text}>Yellow</Text></center>
            </View>
            <View style={styles.layout4}>
                <center><Text style={styles.text}>Green</Text></center>
            </View>
            <View style={styles.layout5}>
                <center><Text style={styles.text}>Blue</Text></center>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    layout1: {
        height: 200,
        width: '100%',
        backgroundColor: '#ff00b3',
        justifyContent: 'center',
    },
    layout2: {
        height: 100,
        width: '50%',
        backgroundColor: '#ff6600',
        justifyContent: 'center',
    },
    layout3: {
        height: 100,
        width: '50%',
        backgroundColor: '#ffff00',
        justifyContent: 'center',
    },
    layout4: {
        height: 100,
        width: '50%',
        backgroundColor: '#00ff00',
        justifyContent: 'center',
    },
    layout5: {
        height: 100,
        width: '50%',
        backgroundColor: '#0066ff',
        justifyContent: 'center',
    },
    text: { color: '#ffff', fontSize: 20 }
})