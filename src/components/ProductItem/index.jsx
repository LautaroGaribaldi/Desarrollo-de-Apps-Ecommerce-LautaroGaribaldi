import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from "./styles.js"

const ProductItem = ({ product, onSelectProductIdEvent }) => {
    return (
        <View>
            <TouchableOpacity style={styles.containerProductItem} onPress={() => onSelectProductIdEvent(product.id)}>
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
