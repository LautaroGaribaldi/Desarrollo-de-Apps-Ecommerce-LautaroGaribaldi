import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
    headerConteiner: {
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.tertiary,
    },
    headerTitle: {
        color: colors.white,
        fontFamily: "RobotoMono-Bold",
    },
});
