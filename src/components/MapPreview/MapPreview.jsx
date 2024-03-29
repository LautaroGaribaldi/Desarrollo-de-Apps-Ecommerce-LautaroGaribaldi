import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import { maps_api_key } from '../../apis/googleClouds'


const MapPreview = ({ location }) => {
    const icon = "https://i.postimg.cc/5NgNBbFD/shop.png"
    return (
        <View style={styles.mapPreview}>
            <Image
                style={styles.mapImage}
                source={{
                    uri: `https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=300x300&mapType=roadmap&markers=color:red%7Clabel=I%7C${location.latitude},${location.longitude}&markers=icon:${icon}%7C${location.latitude + 0.01},${location.longitude}&path=color:0x000ff%7C${location.latitude},${location.longitude}%7C${location.latitude + 0.01},${location.longitude}&key=${maps_api_key}`
                }}
            />
        </View>
    )
}

export default MapPreview

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: "center",
        alignItems: "center",
    },
    mapImage: {
        width: Dimensions.get("window").width,
        height: 300
    }
})