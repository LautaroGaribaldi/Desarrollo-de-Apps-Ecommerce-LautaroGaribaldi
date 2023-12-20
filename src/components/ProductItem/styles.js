import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerProductItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        margin: 10,
    },
    productTitle: {
        textTransform: "capitalize",
        fontSize: 15,
        fontFamily: "RobotoMono-Bold",
    },
    productImage: {
        width: 60,
        height: 60,
    },
});
