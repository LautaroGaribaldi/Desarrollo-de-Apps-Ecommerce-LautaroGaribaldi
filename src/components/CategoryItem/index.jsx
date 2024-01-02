import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from '../Card/index.jsx'
import { styles } from "./styles.js"
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../../features/shopSlice.js'

const CategoryItem = ({ category, navigation }) => {

    const dispatch = useDispatch()
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("Products", { category })
            dispatch(setCategorySelected(category))
        }}>
            <Card style={styles.cardConteiner}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default CategoryItem