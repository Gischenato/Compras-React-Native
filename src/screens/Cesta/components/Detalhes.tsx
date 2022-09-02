import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TipoProdutor } from "../../../mocks/produtores";
import Topo from "../../../components/Topo";

const topoImg = require('../../../assets/topo.png')

export default ({ produtor, cesta }: { produtor: TipoProdutor, cesta: any }) => {
    const { nome, descricao, preco } = cesta


    return (<>
        <Topo titulo="Detalhe da cesta" imagem={topoImg} />
        <View style={styles.view}>
            <Text style={styles.nome}>{nome}</Text>
            <View style={styles.restaurante}>
                <Image style={styles.imagem} source={produtor.imagem} />
                <Text style={styles.nomeRestaurante}>{produtor.nome}</Text>
            </View>
            <Text style={styles.descricao}>{descricao}</Text>
            <Text style={styles.preco}>{preco}</Text>
        </View>
    </>)
}

const styles = StyleSheet.create({
    view: {
        marginHorizontal: 16,
    },
    nome: {
        marginTop: 8,
        fontSize: 26,
        fontWeight: 'bold',
        color: '#404040',
    },
    restaurante: {
        flexDirection: 'row',
        marginVertical: 12,
        alignItems: 'center',
        fontFamily: 'Montserrat'
    },
    imagem: {
        width: 32,
        height: 32,
        borderRadius: 6,
    },
    nomeRestaurante: {
        marginLeft: 12,
        fontSize: 16,
    },
    descricao: {
        fontSize: 20,
        color: '#a3a3a3',
        textAlign: 'justify',
        marginBottom: 8,
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginBottom: 16
    }
})