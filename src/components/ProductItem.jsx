import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProductItem = ({ product }) => {
    return (
        <View style={styles.containerProductItem}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Image
                style={styles.productImage}
                resizeMode="cover"
                source={{ uri: product.thumbnail }}
            />
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    containerProductItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        margin: 10
    },
    productTitle: {
        textTransform: "capitalize",
        fontSize: 15,
        fontFamily: "RobotoMono-Bold"
    },
    productImage: {
        width: 60,
        height: 60,
    }
})