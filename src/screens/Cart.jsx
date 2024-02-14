import { FlatList, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
//import cart_data from "../data/cart_data.json"
import { colors } from '../global/colors'
import CartItem from '../components/CartItem/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/shopService'
import { emptyCart } from '../features/cartSlice'


const Cart = () => {

    const cartItems = useSelector(state => state.cartReducer.items)
    const total = useSelector(state => state.cartReducer.total)
    const localId = useSelector(state => state.authReducer.localId)
    const [triggerPost, result] = usePostOrderMutation()
    const dispatch = useDispatch()
    const [modalVisible, setModalVisible] = useState(false)

    const renderCartItem = ({ item }) => (
        <CartItem item={item} />
    )


    const confirmCart = () => {
        const createdAt = Date.now()
        triggerPost({ total, cartItems, localId: localId, createdAt: createdAt, orderId: Math.ceil(Math.random(1, 10) * 1000) })
        dispatch(emptyCart())
        setModalVisible(true)
    }

    return (
        <View style={styles.cartConteiner}>
            <FlatList
                data={cartItems}
                renderItem={renderCartItem}
                keyExtractor={item => item.id}
            />
            <View style={styles.cartConfirm} >
                <Text style={styles.totalPrice}>Total: ${total}</Text>
                <TouchableOpacity style={styles.confirmButton} onPress={confirmCart}>
                    <Text style={styles.textConfirm}>Confirmar</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={modalVisible} transparent={true}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Gracias por su compra!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(false)}>
                            <Text style={styles.textStyle}>Cerrar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})