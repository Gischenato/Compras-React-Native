import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Estrela from "./Estrela";

export default ({ quantidade: quantidadeAntiga }: { quantidade: number }) => {

    const [quantidade, setQuantidade] = useState(quantidadeAntiga)

    const RenderEstrelas = () => {
        let estrelas = []
        for (let i = 0; i < 5; i++)
            estrelas.push(<Estrela verde={i < quantidade} onPress={() => setQuantidade(i + 1)} key={i} />)
        return estrelas
    }

    return (
        <View style={styles.estrelas}>
            {RenderEstrelas()}
        </View>
    )
}

const styles = StyleSheet.create({
    estrelas: {
        flexDirection: 'row'
    }
})