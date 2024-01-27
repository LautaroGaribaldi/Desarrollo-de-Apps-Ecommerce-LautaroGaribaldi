import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Profile from '../screens/Profile'
import ImageSelector from '../screens/ImageSelector'

const Stack = createNativeStackNavigator()

const ProfileNavitagor = () => {
    return (
        <Stack.Navigator

            initialRouteName='Perfil'
            screenOptions={({ navigation, route }) => ({
                header: () => <Header title={route.name} navigation={navigation} />
            })}
        >
            <Stack.Screen
                name="Perfil"
                component={Profile}
                options={{
                    title: "Perfil",
                }}
            />
            <Stack.Screen
                name="Seleccionar imagen"
                component={ImageSelector}
                options={{
                    title: "Perfil",
                }}
            />
        </Stack.Navigator>
    )
}

export default ProfileNavitagor

const styles = StyleSheet.create({})