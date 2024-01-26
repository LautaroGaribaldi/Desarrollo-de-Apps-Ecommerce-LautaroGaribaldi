import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Input from '../components/Input/Input'
import { colors } from '../global/colors'
import { useLogInMutation } from '../services/authService'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'

const LogIn = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [triggerLogIn, result] = useLogInMutation()

    const onSubmit = () => {
        triggerLogIn({ email, password })
        console.log(result)
    }

    const dispatch = useDispatch()

    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result.data))
        }
    }, [result])

    return (
        <View style={styles.conteiner}>
            <Input
                label="Email:"
                onChange={setEmail}
            />
            <Input
                label="Contraseña:"
                isSecureEntry={true}
                onChange={setPassword}
            />
            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                <Text style={styles.btnText}>Ingresar</Text>
            </TouchableOpacity>
            <View style={styles.altConteiner}>
                <Text style={styles.subtitle}>¿No tienes una cuenta?</Text>
                <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate("SingUp") }}>
                    <Text style={styles.subtitleLink}>SingUp</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LogIn

const styles = StyleSheet.create({
    conteiner: {
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 10
    },
    btn: {
        padding: 10,
        backgroundColor: colors.primaryBack,
        borderRadius: 8,
        margin: 5
    },
    btnText: {
        color: "#fff",
        fontFamily: "RobotoMono-Bold"
    },
    altConteiner: {
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    subtitle: {
        color: "#fff",
        fontFamily: "RobotoMono-Bold",
        fontSize: 12
    },
    subtitleLink: {
        fontFamily: "RobotoMono-Light",
        color: "#fff",
        fontSize: 11,
        textDecorationLine: "underline"
    }
})