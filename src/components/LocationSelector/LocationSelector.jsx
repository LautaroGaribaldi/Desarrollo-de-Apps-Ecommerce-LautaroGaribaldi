import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState, useEffect } from 'react'
import * as Location from "expo-location"
import MapPreview from '../MapPreview/MapPreview'
import { maps_api_key } from '../../apis/googleClouds'
import { setUserLocation } from '../../features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { usePutUserLocationMutation } from '../../services/shopService'
import { colors } from '../../global/colors'
import { getDistance } from 'geolib'


const LocationSelector = () => {
    const [location, setLocation] = useState("")
    const [error, setError] = useState("")
    const [address, setAddress] = useState("")
    const [distance, setDistance] = useState("")
    const localId = useSelector(state => state.authReducer.localId)
    const [triggerPutUderLocation, result] = usePutUserLocationMutation()

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== "granted") {
                setError("No se otorgaron los permisos necesarios para obtener la ubicacion")
                return
            }
            let location = await Location.getCurrentPositionAsync()
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            })
        })()

    }, [])

    useEffect(() => {
        (async () => {
            try {
                if (location.latitude) {
                    const urlReverseGeocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${maps_api_key}`
                    const response = await fetch(urlReverseGeocode)
                    const data = await response.json()
                    const formattedAddress = await data.results[0].formatted_address
                    const distance = getDistance(
                        { latitude: location.latitude, longitude: location.longitude },
                        { latitude: location.latitude + 0.01, longitude: location.longitude }
                    )
                    setAddress(formattedAddress)
                    setDistance(distance)
                }
            } catch (error) {
                setError(error.message)
            }
        })()
    }, [location])

    const dispatch = useDispatch()

    const onConfirmAddress = () => {
        const locationFormatted = {
            latitude: location.latitude,
            longitude: location.longitude,
            address: address,
        }
        dispatch(setUserLocation(locationFormatted))

        triggerPutUderLocation({ location: locationFormatted, localId })
    }
    //console.log("result:", result) ver result para actualizar dirreccion

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Mi ubicacion actual:</Text>
            {
                location.latitude
                    ?
                    <>
                        <Text style={styles.textAddress} >{address}</Text>
                        <Text style={styles.textAddress}>Distancia a la tienda mas cercana: {distance / 1000} Kilometros</Text>
                        <Text style={styles.textLocation}>
                            (lat:{location.latitude}, long:{location.longitude})
                        </Text>
                        <TouchableOpacity style={styles.btn} onPress={onConfirmAddress}>
                            <Text style={styles.textBtn}>Actualizar ubicacion</Text>
                        </TouchableOpacity>
                        <MapPreview location={location} />
                    </>
                    :
                    <ActivityIndicator />
            }
        </View>
    )
}

export default LocationSelector

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 130,
        gap: 5
    },
    noLocationConteiner: {
        width: 200,
        height: 200,
        borderWidth: 2,
        border: colors.success,
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        padding: 10,
        backgroundColor: colors.success,
        borderRadius: 5,
        paddingHorizontal: 15,
        marginVertical: 15
    },
    textBtn: {
        fontFamily: "RobotoMono-Regular",
        color: colors.white
    },
    textTitle: {
        fontFamily: "RobotoMono-Bold",
        fontSize: 16
    },
    textAddress: {
        fontFamily: "RobotoMono-Regular",
    },
    textLocation: {
        fontFamily: "RobotoMono-Light",
        fontSize: 12
    }
})