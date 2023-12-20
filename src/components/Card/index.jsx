import { View } from 'react-native'
import React from 'react'
import { colors } from '../../global/colors.js'
import { styles } from "./styles.js"

const Card = ({ children, style }) => {
    return (
        <View style={{ ...styles.conteiner, ...style }}>
            {children}
        </View>
    )
}

export default Card

