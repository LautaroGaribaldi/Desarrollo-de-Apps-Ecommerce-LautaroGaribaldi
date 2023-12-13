import { ActivityIndicator } from "react-native";
import Categories from "./src/screens/Categories.jsx";
import { useFonts } from "expo-font";
import ProductsByCategory from "./src/screens/ProductsByCategory.jsx";
import { useState } from "react";
import ProductItem from "./src/components/ProductItem.jsx";
import ProductDetail from "./src/screens/ProductDetail.jsx";

export default function App() {
    const [categorySelected, setCategorySelected] = useState("");
    const [productSelected, setProductSelected] = useState({});

    console.log("Categoria selleccionada: ", categorySelected);
    console.log("Producto selleccionado: ", productSelected);
    console.log(productSelected.title)

    const [fontLoaded] = useFonts({
        "RobotoMono-Regular": require("./assets/fonts/RobotoMono-Regular.ttf"),
        "RobotoMono-Bold": require("./assets/fonts/RobotoMono-Bold.ttf"),
        "RobotoMono-Light": require("./assets/fonts/RobotoMono-Light.ttf"),
    });

    if (!fontLoaded) return <ActivityIndicator />;

    const onSelectCategory = (category) => {
        setCategorySelected(category);
    };

    const onSelectProduct = (product) => {
        setProductSelected(product);
    };

    return <>{categorySelected ? productSelected.title ? <ProductDetail product={productSelected} onSelectProductEvent={onSelectProduct} /> : <ProductsByCategory category={categorySelected} onSelectProductEvent={onSelectProduct} onSelectCategoryEvent={onSelectCategory} /> : <Categories onSelectCategoryEvent={onSelectCategory} />}</>;
}
