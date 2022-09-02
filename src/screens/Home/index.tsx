import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native"
import { carregaProdutores } from "../../services/carregadados";

import Topo from "./components/Topo";
import CartaoProdutor from "./components/CartaoProdutor";

export default ({ navigation, route }: { navigation: any, route: any }) => {
    const produtores = carregaProdutores()
    const lista = produtores.lista
    const compra = route.params?.compra

    const [exibeMensagem, setExibeMensagem] = useState(false)

    const CompraRealizada = ({ compra }: { compra: any }) => {
        return (
            <View style={styles.compra}>
                <Text style={styles.textoCompra}>Obrigado por comprar a cesta de {compra.nome}</Text>
            </View>
        )

    }

    useEffect(() => {
        setExibeMensagem(!!compra)
        let timeOut = compra ? setTimeout(() => setExibeMensagem(false), 3000) : null
        return () => clearTimeout(typeof timeOut === 'number' ? timeOut : 0)
    }, [compra])

    const TopoLista = () =>
        <>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#f6f6f6'} />
            <Topo />
            {exibeMensagem && <CompraRealizada compra={compra} />}
            <Text style={styles.produtores}>Produtores</Text>
        </>


    return (
        <>
            <FlatList
                style={styles.view}
                data={lista}
                keyExtractor={item => String(item.id)}
                ListHeaderComponent={TopoLista}
                renderItem={({ item }) => <CartaoProdutor produtor={item}
                    onPress={() => navigation.navigate('Produtor', { produtor: item })} />}
            // onPress={navFunc(item)}/>}
            />
        </>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
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
    },
    compra: {
        paddingVertical: 30,
        paddingHorizontal: 8,
        backgroundColor: '#EAF5F3',
        alignItems: 'center'
    },
    textoCompra: {
        color: '#222222',
        fontSize: 18,
    }
})