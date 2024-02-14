import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from '../Card'
import { Feather } from '@expo/vector-icons';

const OrderItem = ({ order, setOrderId, setModalVisible }) => {

    let date = new Date(order.createdAt).toLocaleDateString()
    return (
        <Card style={styles.cartItemContainer}>
            <View>
                <Text style={styles.createdAt}>
                    Creada el {date}
                </Text>
                <Text style={styles.total}>Total: ${order.total}</Text>
            </View>
            <TouchableOpacity style={styles.searchIcon}
                onPress={() => {
                    setOrderId(order.orderId)
                    setModalVisible(true)
                }
                }>
                <Feather name="search" size={24} color="black" />
            </TouchableOpacity>
        </Card>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20
    },
    searchIcon: {
        marginLeft: "auto"
    }
})