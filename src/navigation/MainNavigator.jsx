import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthtNavitagor from "./AuthNavigator";
import { useSelector } from "react-redux";

const MainNavigator = () => {
    const user = useSelector(state => state.authReducer.user)
    return (
        <NavigationContainer>
            {user ? <TabNavigator /> : <AuthtNavitagor />}
        </NavigationContainer>
    )
}

export default MainNavigator