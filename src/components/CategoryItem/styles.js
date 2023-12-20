import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
    cardConteiner: {
        backgroundColor: colors.white,
        padding: 20,
        margin: 10,
    },
    text: {
        textTransform: "capitalize",
        fontSize: 15,
        fontFamily: "RobotoMono-Regular",
    },
});
