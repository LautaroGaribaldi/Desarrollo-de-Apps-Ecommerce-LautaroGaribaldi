import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Header from '../components/Header'
import Orders from '../screens/Orders'

const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Ordenes'
            screenOptions={({ navigation, route }) => ({
                header: () => <Header title={route.name} navigation={navigation} />
            })} >
            <Stack.Screen
                name='Ordenes'
                component={Orders}
            />
        </Stack.Navigator>
    )
}

export default OrdersNavigator

const styles = StyleSheet.create({})