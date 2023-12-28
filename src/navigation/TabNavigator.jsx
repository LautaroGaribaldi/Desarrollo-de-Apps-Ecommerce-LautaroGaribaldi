import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopNavigator from './ShopNavigator'
import CartNavitagor from './CartNavitagor'
import { colors } from '../global/colors'
import { Entypo, Fontisto } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <NavigationContainer>
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
            </Tab.Navigator>
        </NavigationContainer>
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