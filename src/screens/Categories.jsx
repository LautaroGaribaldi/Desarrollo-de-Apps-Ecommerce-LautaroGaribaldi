import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import categories_data from "../data/categories_data.json"
import CategoryItem from '../components/CategoryItem'



const Categories = ({ navigation }) => {
    const renderCategoryItem = ({ item }) => (
        <CategoryItem category={item} navigation={navigation} />
    )
    return (
        <>
            <FlatList
                data={categories_data}
                renderItem={renderCategoryItem}
                keyExtractor={item => item}
            />
        </>
    )
}

export default Categories

const styles = StyleSheet.create({})