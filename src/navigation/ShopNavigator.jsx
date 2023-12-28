import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Categories from '../screens/Categories'
import ProductDetail from '../screens/ProductDetail'
import ProductsByCategory from '../screens/ProductsByCategory'
import { colors } from '../global/colors'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return (
        <Stack.Navigator

            initialRouteName='Categories'
            screenOptions={({ navigation, route }) => ({
                header: () => <Header title={route.name} navigation={navigation} />
            })}
        >
            <Stack.Screen
                name="Categories"
                component={Categories}
                options={{
                    title: "Categories",
                }}
            />
            <Stack.Screen
                name="Products"
                component={ProductsByCategory}
                options={{
                    title: "Product by Category",
                }}
            />
            <Stack.Screen
                name="Product"
                component={ProductDetail}
                options={{
                    title: "Product Detail",
                }}
            />
        </Stack.Navigator>
    )
}

export default ShopNavigator

const styles = StyleSheet.create({})