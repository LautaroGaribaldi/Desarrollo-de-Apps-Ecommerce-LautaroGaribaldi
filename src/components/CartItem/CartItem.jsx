import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from '../Card'
import { Feather } from '@expo/vector-icons';
import { colors } from '../../global/colors';
import { removeItem } from '../../features/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ item }) => {
    const dispatch = useDispatch()

    const removeItemFromCart = (itemId) => {
        dispatch(removeItem(itemId))
    }


    return (
        <Card style={styles.cartItemConteiner}>
            <Image
                style={styles.imageCartItem}
                resizeMode='cover'
                source={{ uri: item.images[0] }}
            />
            <View>
                <Text style={styles.cartTitle}>{item.title}</Text>
                <Text style={styles.cartLightText}>{item.brand}</Text>
                <Text style={styles.cartLightText}>${item.price} c/u</Text>
                <Text style={styles.cartTotalPrice}>
                    Cantidad: {item.quantity}, Total: ${item.price * item.quantity}
                </Text>
            </View>
            < TouchableOpacity style={styles.trashCart} onPress={() => removeItemFromCart(item.id)}>
                <Feather name="trash" size={24} color="black" />
            </TouchableOpacity>
        </Card>
    )
}

export default CartItem

const styles = StyleSheet.create({
    cartItemConteiner: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
    },
    cartContentConteiner: {
        flexDirection: "row",
    },
    imageCartItem: {
        height: 50,
        width: 50,
        marginRight: 10,
    },
    trashCart: {
        marginLeft: "auto"
    },
    cartTitle: {
        fontFamily: "RobotoMono-Bold",
        textTransform: "capitalize",
        fontSize: 20,
    },
    cartLightText: {
        fontFamily: "RobotoMono-Light",
        textTransform: "capitalize",
        fontSize: 15
    },
    cartTotalPrice: {
        fontFamily: "RobotoMono-Bold",
        textTransform: "capitalize",
        fontSize: 16,
        color: colors.primary
    }
})