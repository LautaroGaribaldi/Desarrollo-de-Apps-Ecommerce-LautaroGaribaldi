import { ActivityIndicator, Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { colors } from '../global/colors'
import products_data from "../data/products_data.json"

const ProductDetail = ({ productId, onSelectProductIdEvent }) => {
    const [productSelected, setProductSelected] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const productFound = products_data.find(product => product.id === productId)
        setProductSelected(productFound)
        setIsLoading(!isLoading)

    }
        , [productId])

    return (
        <>
            <Header title="Detalles del producto" />
            <>{
                isLoading
                    ?
                    <ActivityIndicator />
                    :
                    <>
                        <View style={styles.conteiner}>
                            <Image
                                style={styles.productImage}
                                resizeMode="cover"
                                source={{ uri: productSelected.thumbnail }}
                            />
                            <View style={styles.detailConteiner}>
                                <Text style={styles.title}>{productSelected.title}</Text>
                                <Text style={styles.text}>{productSelected.description}</Text>
                                <Text style={styles.price}>${productSelected.price}</Text>
                                <Button title="Buy" onPress={null} color={colors.primary} />
                            </View>
                        </View>
                        <View>
                            <Button title="Go Back" onPress={() => onSelectProductIdEvent("")} color={colors.aux} />
                        </View>
                    </>
            }
            </>
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
        minWidth: 300,
        width: "100%",
        height: 400,
    },
    text: {
        fontSize: 15,
        fontFamily: "RobotoMono-Regular",
    },
    title: {
        fontSize: 32,
        fontFamily: "RobotoMono-Bold",
    },
    price: {
        fontSize: 32,
        fontFamily: "RobotoMono-Bold",
        color: colors.primary
    },
    detailConteiner: {
        alignItems: "center",
    }
})