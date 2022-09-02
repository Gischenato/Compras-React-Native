import React from "react";
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity} from "react-native";

import { useNavigation } from "@react-navigation/native";

import Gradiente from '../assets/gradiente.svg'
import Voltar from '../assets/voltar.svg'

const topo = require('../assets/produtores/topo.png')


const largura = Dimensions.get('screen').width

export default ({titulo, imagem=topo}: {titulo:string, imagem?:any}) => {
    const navigation = useNavigation();

    return(
        <View>
            <Image source={imagem} style={styles.imagem}/>
            <Gradiente width={largura} height={130/360*largura} style={styles.gradiente}/>
            <Text style={styles.text}>{titulo}</Text>
            <TouchableOpacity style={styles.botaoVoltar}
                              onPress={() => navigation.goBack()}>
                <Voltar color={'#FFFFFF'} style={styles.voltar}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    gradiente:{
        position: 'absolute',
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        alignContent: 'center',
        position: 'absolute',
        marginTop: 20,
        width:'100%'
    },
    imagem:{
        width: '100%',
        height: 180/360*largura,
    },
    botaoVoltar:{
        marginTop: 20,
        marginLeft: 8,
        position: 'absolute',
    },
    voltar:{
        width: 24,
        height: 24
    }
})