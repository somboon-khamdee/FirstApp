import React from 'react'
import { View, StyleSheet, Button, Text, TextInput, Alert } from 'react-native'
export default function TextInputDemo() {
    let [inputName, setInputName] = React.useState('')
    let [inputEmail, setInputEmail] = React.useState('')
    let [inputPassword, setInputPassword] = React.useState('')
    let [inputMemo, setInputMemo] = React.useState('')
    const onPressButton = () => {
        let msg = 'ขอบคุณค่ะ'
        if (inputName === '') {
            msg = 'กรุณากําหนดชื่อของท่าน'
        } else if (inputEmail === '') {
            msg = 'กรุณาใส่อีเมล'
        } else if (inputPassword === '') {
            msg = 'กรุณากําหนดรหัสผ่าน'
        }
        Alert.alert(msg)
    }
    return (
        <View style={styles.container}>

            <View style={styles.items}>
                <Text>Name</Text>
                <TextInput style={styles.textInput} defaultValue={inputName}
                    onChange={e => setInputName(e.nativeEvent.text)}
                />
            </View>

            <View style={styles.items}>
                <Text>Email</Text>
                <TextInput style={styles.textInput} defaultValue={inputEmail}
                    keyboardType='email-address'
                    onChangeText={text => setInputEmail(text)}
                />
            </View>

            <View style={styles.items}>
                <Text>Password</Text>
                <TextInput style={styles.textInput}
                />
            </View>

            <View style={styles.items}>
                <Text>Memo</Text>
                <TextInput style={[styles.textInput, { height: 64 }]}
                    multiline={true} numberOfLines={3}
                    textAlignVertical='top' defaultValue={inputMemo}
                    onChangeText={setInputMemo}
                />
            </View>

            <View style={styles.items}>
                <Button title="ตรวจสอบข้อมูล" onPress={onPressButton} />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, marginTop: 70, marginLeft: 20, marginRight: 20 },
    items: { marginBottom: 15 },
    textInput: {
        height: 32, color: 'black', backgroundColor: '#fff',
        borderWidth: 1, borderColor: '#aaa',
        marginTop: 5, paddingTop: 3, paddingBottom: 3
    },
});