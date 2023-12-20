import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import products_data from "../data/products_data.json"
import ProductItem from '../components/ProductItem'
import Header from '../components/Header'
import Search from '../components/Search'
import Card from '../components/Card'
import { colors } from '../global/colors'



const ProductsByCategory = ({ category, onSelectProductIdEvent, onSelectCategoryEvent }) => {

    const [productsByCategory, setProductsByCategory] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        const productFilteredByCategory = products_data.filter(product => product.category === category)
        const productFiltered = productFilteredByCategory.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
        setProductsByCategory(productFiltered)
    }, [category, search])

    const renderProductItem = ({ item }) => (
        <Card>
            <ProductItem product={item} onSelectProductIdEvent={onSelectProductIdEvent} />
        </Card>
    )

    const onSearch = (search) => {
        setSearch(search)
    }

    return (
        <>
            <Header title="Productos" />
            <Search onSearchHandlerEvent={onSearch} />
            <FlatList
                data={productsByCategory}
                renderItem={renderProductItem}
                keyExtractor={item => item.id}
            />
            <Button title="Go Back" onPress={() => { onSelectCategoryEvent("") }} color={colors.aux} />
        </>

    )
}

export default ProductsByCategory

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})