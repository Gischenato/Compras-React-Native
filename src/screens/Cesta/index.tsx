import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Botao from "../../components/Botao";
import Detalhes from "./components/Detalhes";
import Item from "./components/Item";

export default ({ route }: { route: any }) => {
    const { itens, produtor, cesta } = route.params

    const navigation = useNavigation()

    const Header = () => {
        return (<>
            <Detalhes produtor={produtor} cesta={cesta} />
            <Botao texto="Comprar" onPress={() => { navigation.navigate('Home', {comprou:cesta}) }} />
            <Text style={styles.frase}>Itens da Cesta</Text>
        </>)
    }

    return (<>
        <FlatList data={itens}
            ListHeaderComponent={<Header/>}
            keyExtractor={item => item.nome}
            renderItem={({ item }) => <Item item={item} />}
        />
    </>
    )
}

const styles = StyleSheet.create({
    frase: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 16,
        marginLeft: 16,
        color: '#303030',
    }
})