import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from '../Card/index.jsx'
import { styles } from "./styles.js"

const CategoryItem = ({ category, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Products", { category })}>
            <Card style={styles.cardConteiner}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default CategoryItem