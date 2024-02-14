import { StyleSheet, Text, View, FlatList, Modal, Pressable } from 'react-native'
import { useEffect, useState } from 'react'
import OrderItem from '../components/OrderItem/OrderItem'
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../services/shopService'
import CartItem from '../components/CartItem/CartItem'
const Orders = () => {

    const localId = useSelector(state => state.authReducer.localId)
    const { data, isLoading, error } = useGetOrdersQuery(localId)
    const [orderData, setOrderData] = useState([])
    const [orderIdSelected, setOrderIdSelected] = useState("")
    const [orderSelected, setOrderSelected] = useState({})
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        if (data) {
            const orderData = Object.values(data)
            setOrderData(orderData)
        }
    }, [data, isLoading])

    useEffect(() => {
        const orderSelected = orderData.find(order => order.orderId === orderIdSelected)
        setOrderSelected(orderSelected)
    }, [orderIdSelected])


    const renderOrderItem = ({ item }) => {
        return (
            <OrderItem order={item} setOrderId={setOrderIdSelected} setModalVisible={setModalVisible} />
        )
    }

    const renderCartItem = ({ item }) => (
        <CartItem item={item} />
    )

    return (
        <>
            <FlatList
                data={orderData}
                renderItem={renderOrderItem}
            />
            <Modal visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Total: ${orderSelected?.total}</Text>
                        <FlatList
                            data={orderSelected?.cartItems}
                            renderItem={renderCartItem}
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(false)}>
                            <Text style={styles.textStyle}>Cerrar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default Orders

const styles = StyleSheet.create({
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