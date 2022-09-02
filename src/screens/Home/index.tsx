import React, { useEffect, useState } from "react"

import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, FlatList } from "react-native"

// import produtores from "../../mocks/produtores";
import { Produtores, TipoProdutor } from "../../mocks/produtores";

import { carregaProdutores } from "../../services/carregadados";

import Topo from "./components/Topo";
import CartaoProdutor from "./components/CartaoProdutor";

export default ({navigation}: {navigation?:any}) => {
    const produtores = carregaProdutores()
    const lista = produtores.lista

    // const navFunc = (item:TipoProdutor) => navigation.navigate('Produtor', {produtor:item})

    const TopoLista = () =>
        <>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#f6f6f6'}/>
            <Topo/>
            <Text style={styles.produtores}>Produtores</Text>
        </>


    return (
        <>
        <FlatList
            style={styles.view}
            data={lista}
            keyExtractor={item=> String(item.id)}
            ListHeaderComponent={TopoLista}
            renderItem={({item}) => <CartaoProdutor produtor={item} 
            onPress={() => navigation.navigate('Produtor', {produtor:item})}/>}
            // onPress={navFunc(item)}/>}
            />
        </>
    )
}

const styles = StyleSheet.create({
    view: {
        flex:1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        marginTop: 24,
        marginHorizontal: 16
    },
    produtores: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "bold",
        color: "#464646",
        marginTop: 24,
        marginLeft: 16,
    }
})