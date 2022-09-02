import React from "react";
import { Text, View, Image, StyleSheet, FlatList } from "react-native";
import { TipoProdutor } from "../../mocks/produtores";

import Topo from '../../components/Topo';
import Cesta from "./components/Cesta";


export default ({ route }: { route: any }) => {
    const produtor: TipoProdutor = route.params?.produtor

    const Header = () => {
        return (<>
            <Topo titulo={'Detalhes da empresa'} />
            <View style={styles.conteudo}>
                <View style={styles.header}>
                    <Image source={produtor.imagem} style={styles.imagem} />
                    <Text style={styles.nome}>{produtor.nome}</Text>
                </View>
                <Text style={styles.cestas}>Cestas</Text>
            </View>
        </>)
    }

    return (
        <FlatList data={produtor.cestas}
            keyExtractor={item => item.detalhes.nome}
            ListHeaderComponent={Header}
            renderItem={({ item }) => <Cesta
                props={item}
                produtor={produtor}
            />}
        />
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
    },
    cestas: {
        marginTop: 32,
        marginBottom: 24,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#303030',

    },
    imagem: {
        width: 62,
        height: 62,
        marginTop: -23,
        borderRadius: 6
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    nome: {
        marginLeft: 16,
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#464646',
    }
})