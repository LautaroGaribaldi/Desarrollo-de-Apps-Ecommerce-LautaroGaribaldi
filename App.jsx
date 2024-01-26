import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import MainNavigator from "./src/navigation/MainNavigator";
//import Navigator from "./src/navigation/ShopNavigator";

export default function App() {

    const [fontLoaded] = useFonts({
        "RobotoMono-Regular": require("./assets/fonts/RobotoMono-Regular.ttf"),
        "RobotoMono-Bold": require("./assets/fonts/RobotoMono-Bold.ttf"),
        "RobotoMono-Light": require("./assets/fonts/RobotoMono-Light.ttf"),
    });

    if (!fontLoaded) return <ActivityIndicator />;

    return (
        <Provider store={store}>
            <MainNavigator />
        </Provider>
    )
}
