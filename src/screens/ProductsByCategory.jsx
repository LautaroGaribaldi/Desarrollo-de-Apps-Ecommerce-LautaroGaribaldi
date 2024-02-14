import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem'
import Header from '../components/Header'
import Search from '../components/Search'
import Card from '../components/Card'
import { colors } from '../global/colors'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../services/shopService'



const ProductsByCategory = ({ navigation, route }) => {

    const [productsByCategory, setProductsByCategory] = useState([])
    const [search, setSearch] = useState("")


    const category = useSelector(state => state.shopReducer.categorySelected)

    const { data: productFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category)
    useEffect(() => {
        if (!isLoading) {
            const productValues = Object.values(productFilteredByCategory)
            const productFiltered = productValues.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
            setProductsByCategory(productFiltered)
        }
    }, [category, search, isLoading])

    const renderProductItem = ({ item }) => (
        <Card>
            <ProductItem product={item} navigation={navigation} />
        </Card>
    )

    const onSearch = (search) => {
        setSearch(search)
    }

    return (
        <>
            <Search onSearchHandlerEvent={onSearch} />
            <FlatList
                data={productsByCategory}
                renderItem={renderProductItem}
                keyExtractor={item => item.id}
            />
        </>

    )
}

export default ProductsByCategory

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})