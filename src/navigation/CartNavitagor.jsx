import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Cart from '../screens/Cart'

const Stack = createNativeStackNavigator()

const CartNavitagor = () => {
    return (
        <Stack.Navigator

            initialRouteName='Carrito'
            screenOptions={({ navigation, route }) => ({
                header: () => <Header title={route.name} navigation={navigation} />
            })}
        >
            <Stack.Screen
                name="Carritossss"
                component={Cart}
                options={{
                    title: "Carritossss",
                }}
            />
        </Stack.Navigator>
    )
}

export default CartNavitagor

const styles = StyleSheet.create({})