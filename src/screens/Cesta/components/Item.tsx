import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { TipoItem } from "../../../mocks/produtores";

export default ({ item }: { item: TipoItem }) => {
    return (
        <View style={styles.item}>
            <View style={styles.descricao}>
                <Image style={styles.imagem} source={item.imagem} />
                <Text style={styles.nome}>{item.nome}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 16,
    },
    descricao: {
        paddingVertical: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#DCDCDC',
        alignItems: 'center'
    },
    imagem: {
        width: 46,
        height: 46,
        borderRadius: 6,
        marginRight: 11,
    },
    nome: {
        fontSize: 16
    }
})