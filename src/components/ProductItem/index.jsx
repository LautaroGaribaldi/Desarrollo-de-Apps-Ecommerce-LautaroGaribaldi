import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from "./styles.js"
import { useDispatch } from 'react-redux'
import { setProductIdSelected } from '../../features/shopSlice.js'

const ProductItem = ({ product, navigation }) => {

    const dispatch = useDispatch()


    return (
        <View>
            <TouchableOpacity style={styles.containerProductItem} onPress={() => {
                dispatch(setProductIdSelected(product))
                navigation.navigate("Product", product.id)
            }}>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Image
                    style={styles.productImage}
                    resizeMode="cover"
                    source={{ uri: product.thumbnail }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default ProductItem
