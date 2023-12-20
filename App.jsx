import { ActivityIndicator } from "react-native";
import Categories from "./src/screens/Categories.jsx";
import { useFonts } from "expo-font";
import ProductsByCategory from "./src/screens/ProductsByCategory.jsx";
import { useState } from "react";
import ProductDetail from "./src/screens/ProductDetail.jsx";

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

    return <>{productIdSelected ? <ProductDetail productId={productIdSelected} onSelectProductIdEvent={onSelectProductId} /> : categorySelected ? <ProductsByCategory category={categorySelected} onSelectProductIdEvent={onSelectProductId} onSelectCategoryEvent={onSelectCategory} /> : <Categories onSelectCategoryEvent={onSelectCategory} />}</>;
}
