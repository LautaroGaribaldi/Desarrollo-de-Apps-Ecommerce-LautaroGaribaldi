import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
//import cart_data from "../data/cart_data.json"
import { colors } from '../global/colors'
import CartItem from '../components/CartItem/CartItem'
import { useSelector } from 'react-redux'


const Cart = () => {

    // const [total, setTotal] = useState()

    // useEffect(() => {
    //     const totalCart = cart_data.reduce((accumulator, currentItem) => (
    //         accumulator += currentItem.price * currentItem.quantity
    //     ), 0)
    //     setTotal(totalCart)
    // }, [])

    const renderCartItem = ({ item }) => (
        <CartItem item={item} />
    )

    const cartItems = useSelector(state => state.cartReducer.items)
    const total = useSelector(state => state.cartReducer.total)

    return (
        <View style={styles.cartConteiner}>
            <FlatList
                data={cartItems}
                renderItem={renderCartItem}
                keyExtractor={item => item.id}
            />
            <View style={styles.cartConfirm} >
                <Text style={styles.totalPrice}>Total: ${total}</Text>
                <TouchableOpacity style={styles.confirmButton} onPress={null}>
                    <Text style={styles.textConfirm}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    cartConteiner: {
        flex: 1
    },
    cartConfirm: {
        marginBottom: 130,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
    },
    totalPrice: {
        fontSize: 16,
        fontFamily: "RobotoMono-Bold"
    },
    confirmButton: {
        backgroundColor: colors.secundary,
        padding: 10,
        borderRadius: 10,
    },
    textConfirm: {
        fontFamily: "RobotoMono-Bold",
        fontSize: 16,
        color: colors.white
    }
})