import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import Input from '../components/Input/Input'
import { colors } from '../global/colors'
import { useState, useEffect } from 'react'
import { useSignUpMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { singUpSchema } from '../validations/singUpSchema'


const SingUp = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const [triggerSignUp, result] = useSignUpMutation()

    const onSubmit = () => {
        setEmailError("")
        setPasswordError("")
        setConfirmPasswordError("")
        try {
            singUpSchema.validateSync({ email, password, confirmPassword }, { abortEarly: false })
            triggerSignUp({ email, password })
        } catch (error) {
            console.log(error.errors)
            error.errors.map(e => {
                console.log(Object.keys(e)[0])
                const customError = Object.values(e)[0]
                switch (Object.keys(e)[0]) {
                    case "empty_email":
                        setEmailError(customError)
                    case "invalid_email":
                        setEmailError(customError)
                    case "empty_password":
                        setPasswordError(customError)
                    case "invalid_password":
                        setPasswordError(customError)
                    case "invalid_confirm_password":
                        setConfirmPasswordError(customError)
                    case "invalid_match_password":
                        setConfirmPasswordError(customError)
                    default:
                        break
                }
            })
        }
    }

    const dispatch = useDispatch()

    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result.data))
        }
    }, [result])

    return (
        <KeyboardAvoidingView style={styles.conteiner} behavior="height">
            <Input
                label="Email:"
                onChange={setEmail}
                error={emailError}
            />
            <Input
                label="Contraseña:"
                onChange={setPassword}
                isSecureEntry={true}
                error={passwordError}
            />
            <Input
                label="Repetir contraseña:"
                onChange={setConfirmPassword}
                isSecureEntry={true}
                error={confirmPasswordError}
            />
            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                <Text style={styles.btnText}>Registrarme</Text>
            </TouchableOpacity>
            <View style={styles.altConteiner}>
                <Text style={styles.subtitle}>¿ya tenes una cuenta?</Text>
                <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate("Login") }}>
                    <Text style={styles.subtitleLink}>Ingresar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SingUp

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