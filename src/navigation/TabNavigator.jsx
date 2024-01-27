import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopNavigator from './ShopNavigator'
import CartNavitagor from './CartNavitagor'
import { colors } from '../global/colors'
import { Entypo, Fontisto, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import OrdersNavigator from './OrdersNavigator'
import ProfileNavitagor from './ProfileNavigator'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
        >
            <Tab.Screen
                name="ShopStack"
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo name="shop" size={24} color={focused ? "#ccc" : "black"} />
                    )
                }}
            />
            <Tab.Screen
                name="CartStack"
                component={CartNavitagor}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Fontisto name="shopping-basket" size={24} color={focused ? "#ccc" : "black"} />
                    )
                }}
            />

            <Tab.Screen
                name="OrderStack"
                component={OrdersNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5 name="clipboard-list" size={24} color={focused ? "#ccc" : "black"} />
                    )
                }}
            />

            <Tab.Screen
                name="ProfileStack"
                component={ProfileNavitagor}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="user-o" size={24} color={focused ? "#ccc" : "black"} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.tertiary,
        shadowColor: "#ccc",
        elevation: 1,
    }
})