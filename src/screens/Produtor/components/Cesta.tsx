import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image, ProgressViewIOSComponent } from "react-native";
import { TipoDetalhes, TipoItem, TipoProdutor } from "../../../mocks/produtores";
import { useNavigation } from "@react-navigation/native";

type Props = {
    detalhes:  TipoDetalhes
    itens: Array<TipoItem>
}

export default ({props :{detalhes, itens}, produtor}: {props: Props, produtor: TipoProdutor}) => {
    const {nome, imagem, descricao, preco} = detalhes
    
    const navigation:any = useNavigation()

    return (        
        <TouchableOpacity style={styles.cesta} onPress={() => navigation.navigate('Cesta', {itens:itens, 
                                                                                            produtor:produtor,
                                                                                            cesta: detalhes})}>
            <View style={styles.view}>
                <Image source={imagem} style={styles.imagem}/>
                <View style={styles.detalhes}>
                    <Text style={styles.nome}>{nome}</Text>
                    <Text style={styles.descricao}>{descricao}</Text>
                    <Text style={styles.preco}>{preco}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    view: {
        paddingVertical: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#DCDCDC',
    },
    cesta: {
        paddingHorizontal: 16,
    },
    imagem: {
        width: 68,
        height: 68,
        borderRadius: 8
    },
    detalhes: {
        flex: 1,
        marginLeft: 8,
    },
    nome: {
        fontSize: 18,
        color: '#404040',
        fontWeight: 'bold'
    },
    descricao: {
        textAlign: 'left',
        fontSize: 14,
        color: '#a3a3a3'
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
    }
})