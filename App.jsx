import { ActivityIndicator } from "react-native";
import Categories from "./src/screens/Categories";
import { useFonts } from "expo-font";
import ProductsByCategory from "./src/screens/ProductsByCategory.jsx";
import { useState } from "react";

export default function App() {
    const [categorySelected, setCategorySelected] = useState("");

    console.log("Categoria selleccionada: ", categorySelected);

    const [fontLoaded] = useFonts({
        "RobotoMono-Regular": require("./assets/fonts/RobotoMono-Regular.ttf"),
        "RobotoMono-Bold": require("./assets/fonts/RobotoMono-Bold.ttf"),
        "RobotoMono-Light": require("./assets/fonts/RobotoMono-Light.ttf"),
    });

    if (!fontLoaded) return <ActivityIndicator />;

    const onSelectCategory = (category) => {
        setCategorySelected(category);
    };

    return <>{categorySelected ? <ProductsByCategory category={categorySelected} /> : <Categories onSelectCategoryEvent={onSelectCategory} />}</>;
}
