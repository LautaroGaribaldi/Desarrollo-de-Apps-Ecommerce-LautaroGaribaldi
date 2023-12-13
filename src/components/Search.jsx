import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons';



const Search = ({ onSearchHandlerEvent }) => {

    const [searchInput, setSearchInput] = useState("")

    const cancelHandler = () => {
        onSearchHandlerEvent(""),
            setSearchInput("")
    }

    return (
        <View style={styles.searchConteiner}>
            < TextInput
                style={styles.textInput}
                onChangeText={setSearchInput}
                placeholder='Buscar...'
                value={searchInput}
            />
            <TouchableOpacity onPress={() => onSearchHandlerEvent(searchInput)}>
                <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => cancelHandler()}>
                <Entypo name="circle-with-cross" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchConteiner: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    textInput: {
        width: "80%"
    }
})