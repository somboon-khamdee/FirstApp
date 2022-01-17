// column-items.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
export default function ColumnItems() {
    const items = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
    return (
        <View style={styles.container}>
            {
                items.map((item, i) => {
                    return (
                        <View key={i} style={styles.items}>
                            <Text style={styles.text}>{item}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 50, padding: 10,
        flexWarp: 'warp',
        marginTop: 50, padding: 10,
    },
    items: {
        height: 60, backgroundColor: '#CECECE',
        justifyContent: 'center',
        marginBottom: 15, paddingLeft: 10,
        text: { color: 'red', fontSize: 20, }
    },
})