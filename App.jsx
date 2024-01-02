import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import TabNavigator from "./src/navigation/TabNavigator";
import { Provider } from "react-redux";
import store from "./src/store";
//import Navigator from "./src/navigation/ShopNavigator";

export default function App() {
    const [categorySelected, setCategorySelected] = useState("");
    const [productIdSelected, setProductIdSelected] = useState(null);

    console.log("Categoria selleccionada: ", categorySelected);
    console.log("Producto selleccionado: ", productIdSelected);

    const [fontLoaded] = useFonts({
        "RobotoMono-Regular": require("./assets/fonts/RobotoMono-Regular.ttf"),
        "RobotoMono-Bold": require("./assets/fonts/RobotoMono-Bold.ttf"),
        "RobotoMono-Light": require("./assets/fonts/RobotoMono-Light.ttf"),
    });

    if (!fontLoaded) return <ActivityIndicator />;

    const onSelectCategory = (category) => {
        setCategorySelected(category);
    };

    const onSelectProductId = (productId) => {
        setProductIdSelected(productId);
    };

    return (
        <Provider store={store}>
            <TabNavigator />
        </Provider>
    )
}
