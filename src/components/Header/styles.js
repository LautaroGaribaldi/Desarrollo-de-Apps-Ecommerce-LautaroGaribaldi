import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
    headerConteiner: {
        flexDirection: "row",
        height: 100,
        justifyContent: "space-between",
        paddingHorizontal: 30,
        alignItems: "center",
        backgroundColor: colors.tertiary,
    },
    headerTitle: {
        color: colors.white,
        fontFamily: "RobotoMono-Bold",
    },
});
