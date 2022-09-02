import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet} from "react-native";

import { TipoProdutor } from "../../../mocks/produtores";

import Estrelas from "../../../components/Estrelas";

export default ({produtor, onPress} : {produtor: TipoProdutor, onPress?:() => void}) => {
    // console.log(produtor);
    
    return(
        <TouchableOpacity style={styles.cartao} onPress={onPress}>
            <Image source={produtor.imagem} style={styles.imagem}/>
            <View style={styles.informacoes}>
                <View>
                    <Text style={styles.nome}>{produtor.nome}</Text>
                    <Estrelas quantidade={produtor.estrelas}/>
                </View>
                <Text style={styles.distancia}>{produtor.distancia}m</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    cartao:{
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        elevation: 4
    },
    informacoes:{
        flexDirection: 'row',
        flex:1,
        justifyContent: 'space-between',
        marginVertical: 16,
        marginRight: 16
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        lineHeight: 22,
        marginBottom: 6
    },
    distancia:{
        fontSize: 16,
        color: '#a3a3a3',
    },
    imagem:{
        margin: 16,
        width: 48,
        height: 48,
        borderRadius: 10
    } 

})