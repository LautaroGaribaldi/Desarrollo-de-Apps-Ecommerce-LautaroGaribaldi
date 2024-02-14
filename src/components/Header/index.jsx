import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../global/colors.js'
import { styles } from "./styles.js"
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/authSlice.js';
import { deleteSession } from '../../db/index.js';

const Header = ({ title, navigation }) => {

    const email = useSelector(state => state.authReducer.user)
    const localId = useSelector(state => state.authReducer.localId)
    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(logout())
        const deletedSession = deleteSession(localId)
        console.log("Sesion eliminada: ", deletedSession)
    }
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
            {
                email
                &&
                <TouchableOpacity onPress={onLogout}>
                    <AntDesign name="logout" size={20} color="white" />
                </TouchableOpacity>
            }
        </View>
    )
}

export default Header
