import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthtNavitagor from "./AuthNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfilePictureQuery, useGetUserLocationQuery } from "../services/shopService";
import { useEffect } from "react";
import { setProfilePicture, setUserLocation } from "../features/authSlice";

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

    return (
        <NavigationContainer>
            {user && !isLoading ? <TabNavigator /> : <AuthtNavitagor />}
        </NavigationContainer>
    )
}

export default MainNavigator