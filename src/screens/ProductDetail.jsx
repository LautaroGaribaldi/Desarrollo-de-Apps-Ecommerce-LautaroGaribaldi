import { ActivityIndicator, Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { colors } from '../global/colors'
import products_data from "../data/products_data.json"
import { addItem } from '../features/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

const ProductDetail = ({ route }) => {
    //const [productSelected, setProductSelected] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const productId = route.params

    const productSelected = useSelector(state => state.shopReducer.productIdSelected)


    useEffect(() => {
        //const productFound = products_data.find(product => product.id === productId)
        //setProductSelected(productFound)
        setIsLoading(!isLoading)

    }
        , [productId])

    const dispatch = useDispatch()

    const onAddToCart = () => {
        dispatch(addItem({ ...productSelected, quantity: 1 }))
    }

    return (
        <>
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
                                <Button title="Agregar al carrito" onPress={onAddToCart} color={colors.primary} />
                            </View>
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