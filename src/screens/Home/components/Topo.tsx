import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

import topo from "../../../mocks/topo"

export default () => {
    return (
        <View style={styles.view}>
            <Image source={topo.logo} style={styles.imagem} />
            <Text style={styles.boasVindas}>{topo.boasVindas}</Text>
            <Text style={styles.legenda}>{topo.legenda}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    view: {
        backgroundColor: '#F6F6F6',
        padding: 16
    },
    imagem: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        marginTop: 22,
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
        lineHeight: 42,
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: '#a3a3a3'
    }
})