import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from '../Card/index.jsx'
import { styles } from "./styles.js"

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