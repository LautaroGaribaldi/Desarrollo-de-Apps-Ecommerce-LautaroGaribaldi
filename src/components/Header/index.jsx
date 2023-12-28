import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../global/colors.js'
import { styles } from "./styles.js"
import { Ionicons } from '@expo/vector-icons';

const Header = ({ title, navigation }) => {
    return (
        <View style={styles.headerConteiner}>
            {
                navigation.canGoBack()
                    ?
                    <TouchableOpacity onPress={navigation.goBack}>
                        <Ionicons name="return-up-back" size={24} color={colors.white} />
                    </TouchableOpacity>
                    :
                    <View></View>
            }
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

export default Header

// const styles = StyleSheet.create({
//     headerConteiner: {
//         height: 100,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: colors.tertiary
//     },
//     headerTitle: {
//         color: colors.white,
//         fontFamily: "RobotoMono-Bold"
//     }
// })