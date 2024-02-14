import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryItem from '../components/CategoryItem'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../services/shopService'

const Categories = ({ navigation }) => {

    const { data, isLoading, error } = useGetCategoriesQuery()

    const renderCategoryItem = ({ item }) => (
        <CategoryItem category={item} navigation={navigation} />
    )
    return (
        <>
            <FlatList
                data={data}
                renderItem={renderCategoryItem}
                keyExtractor={item => item}
            />
        </>
    )
}

export default Categories

const styles = StyleSheet.create({})