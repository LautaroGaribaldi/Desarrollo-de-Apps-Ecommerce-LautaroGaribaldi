import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { colors } from '../global/colors'

const ProductDetail = ({ product, onSelectProductEvent }) => {
    return (
        <>
            <Header title={product.category} />
            <View style={styles.conteiner}>
                <Text>{product.title}</Text>
                <Image
                    style={styles.productImage}
                    resizeMode="cover"
                    source={{ uri: product.thumbnail }}
                />
                <Text>{product.description}</Text>
                <Text>price: ${product.price}</Text>
                <Button title="Buy" onPress={null} color={colors.primary} />
            </View>
            <View>
                <Button title="Go Back" onPress={() => onSelectProductEvent("")} color={colors.aux} />
            </View>
        </>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    productImage: {
        width: 250,
        height: 250,
    }
})