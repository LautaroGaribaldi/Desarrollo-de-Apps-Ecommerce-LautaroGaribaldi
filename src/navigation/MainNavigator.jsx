import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthtNavitagor from "./AuthNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfilePictureQuery } from "../services/shopService";
import { useEffect } from "react";
import { setProfilePicture } from "../features/authSlice";

const MainNavigator = () => {
    const user = useSelector(state => state.authReducer.user)
    const dispatch = useDispatch()
    const localId = useSelector(state => state.authReducer.localId)
    const { data, error, isLoading } = useGetProfilePictureQuery(localId)
    //const user = "loged"

    useEffect(() => {
        if (data) {
            dispatch(setProfilePicture(data.image))
        }
    }, [data])

    return (
        <NavigationContainer>
            {user && !isLoading ? <TabNavigator /> : <AuthtNavitagor />}
        </NavigationContainer>
    )
}

export default MainNavigator