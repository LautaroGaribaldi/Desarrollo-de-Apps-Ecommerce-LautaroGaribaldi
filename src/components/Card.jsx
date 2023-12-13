import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const Card = ({ children, style }) => {
    return (
        <View style={{ ...styles.conteiner, ...style }}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    conteiner: {
        shadowColor: colors.aux,
        shadowOffset: {
            height: 5,
            width: 3,
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 1,
        borderWidth: 0
    }
})