import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
    conteiner: {
        shadowColor: colors.aux,
        shadowOffset: {
            height: 5,
            width: 3,
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 1,
        borderWidth: 0,
    },
});
