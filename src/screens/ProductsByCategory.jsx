import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
//import products_data from "../data/products_data.json"
import ProductItem from '../components/ProductItem'
import Header from '../components/Header'
import Search from '../components/Search'
import Card from '../components/Card'
import { colors } from '../global/colors'
import { useDispatch, useSelector } from 'react-redux'



const ProductsByCategory = ({ navigation, route }) => {

    const [productsByCategory, setProductsByCategory] = useState([])
    const [search, setSearch] = useState("")

    //const { category } = route.params

    const category = useSelector(state => state.shopReducer.categorySelected)
    const productFilteredByCategory = useSelector(state => state.shopReducer.productsFilteredByCategory)

    useEffect(() => {
        const productFiltered = productFilteredByCategory.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
        setProductsByCategory(productFiltered)
    }, [category, search])

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