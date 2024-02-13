import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthtNavitagor from "./AuthNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfilePictureQuery, useGetUserLocationQuery } from "../services/shopService";
import { useEffect } from "react";
import { setProfilePicture, setUser, setUserLocation } from "../features/authSlice";
import { fetchSession } from "../db";

const MainNavigator = () => {
    const user = useSelector(state => state.authReducer.user)
    const dispatch = useDispatch()
    const localId = useSelector(state => state.authReducer.localId)
    const { data, error, isLoading } = useGetProfilePictureQuery(localId)
    //const user = "loged"
    const { data: locationData, error: locationError, isLoading: isLocationLoading = useGetUserLocationQuery() } = useGetUserLocationQuery(localId)

    useEffect(() => {
        if (data) {
            dispatch(setProfilePicture(data.image))
        }
        if (locationData) {
            dispatch(setUserLocation(locationData))
        }
    }, [data, locationData, isLoading, isLocationLoading])

    useEffect(() => {
        (async () => {
            try {
                console.log("idlocal", localId)
                const session = await fetchSession(localId)
                if (session?.rows.length) {
                    console.log("Se han encontrado datos de usuario: ", session.rows._array[0])
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            } catch (error) {
                console.log("Error al obtener datos del usuario: ", error)
            }
        })()
    }, [])

    return (
        <NavigationContainer>
            {user ? <TabNavigator /> : <AuthtNavitagor />}
        </NavigationContainer>
    )
}

export default MainNavigator