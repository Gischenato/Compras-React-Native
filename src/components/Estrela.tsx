import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const estrela = require('../assets/estrela.png')
const estrelaCinza = require('../assets/estrelaCinza.png')

export default ({verde, grande=false, onPress=()=>{}} : {verde:boolean, grande?:boolean, onPress?:() => void}) => {
    const style = stylesFunc(grande)

    return(
        <TouchableOpacity onPress={onPress}>
            <Image source={verde ? estrela : estrelaCinza} style={style.imagem}/>
        </TouchableOpacity>
    )
}

const stylesFunc = (grande:boolean) => StyleSheet.create({
    imagem:{
        width: grande ? 24 : 16,
        height: grande ? 24 : 16,
        marginRight:2
    }
})