import React from "react";

import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default ({texto, onPress}: {texto:string, onPress:() => void}) => {
    

    return(<>
        <TouchableOpacity style={styles.botao} onPress={onPress}>
            <Text style={styles.texto}>{texto}</Text>
        </TouchableOpacity>
    </>)
}

const styles = StyleSheet.create({
    botao: {
        marginHorizontal: 16,
        paddingVertical: 22,
        borderRadius: 8,
        backgroundColor: '#2A9F85',
    },
    texto: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: "#fff",
    }
})