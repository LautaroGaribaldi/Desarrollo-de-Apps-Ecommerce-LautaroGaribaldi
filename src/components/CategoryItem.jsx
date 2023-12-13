import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../global/colors'

const CategoryItem = ({ category, onSelectCategoryEvent }) => {
    return (
        <TouchableOpacity onPress={() => onSelectCategoryEvent(category)}>
            <Card style={styles.cardConteiner}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardConteiner: {
        backgroundColor: colors.white,
        padding: 20,
        margin: 10,
    },
    text: {
        textTransform: "capitalize",
        fontSize: 15,
        fontFamily: "RobotoMono-Regular"
    }
})