import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import user_data from "../data/user_data.json"
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Profile = ({ navigation }) => {
    //const [image, setImage] = useState(null)
    const image = useSelector(state => state.authReducer.profilePicture)

    return (
        <View style={styles.container}>
            <View>
                <Pressable onPress={() => navigation.navigate("Seleccionar imagen")} style={({ pressed }) => [{ backgroundColor: pressed ? "#DCDCDC" : "#E8E8E8", }, styles.imageContainer]}>
                    {
                        image ? <Image source={{ uri: image }} style={styles.profilePicture} resizeMode="contain" /> : <Image source={require("../../assets/img/user.png")} style={styles.profilePicture} resizeMode="contain" />
                    }
                </Pressable>
            </View>
            <View style={styles.userDataContainer}>
                <Text style={styles.userTitle}>{user_data.name}</Text>
                <Text style={styles.userData}>{user_data.role}</Text>
                <Text style={styles.userData}>{user_data.level}</Text>
                <Text style={styles.userData}>{user_data.addres}</Text>
                <Text style={styles.userData}>{user_data.city}</Text>

            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 20,
        gap: 20,
        alignItems: 'flex-start'
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    userDataContainer: {
        marginTop: 10,

    },
    userTitle: {
        fontFamily: 'RobotoMono-Bold',
        fontSize: 16,
    },
    imageContainer: {
        borderRadius: 100,
    },
    userData: {
        fontFamily: 'RobotoMono-Light',
        fontSize: 12
    }
})