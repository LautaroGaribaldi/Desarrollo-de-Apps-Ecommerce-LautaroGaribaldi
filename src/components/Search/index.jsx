import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { styles } from "./styles.js"



const Search = ({ onSearchHandlerEvent }) => {

    const [searchInput, setSearchInput] = useState("")
    const [error, setError] = useState("")

    const onSearchValidator = () => {
        const regEx = /[^\w\s]/
        if (regEx.test(searchInput)) {
            setError("Solo se admiten letras y numeros")
            setSearchInput("")
        } else {
            setError("")
            onSearchHandlerEvent(searchInput)
        }
    }

    const cancelHandler = () => {
        onSearchHandlerEvent(""),
            setSearchInput("")
    }

    return (
        <>
            <View style={styles.searchConteiner}>
                < TextInput
                    style={styles.textInput}
                    onChangeText={setSearchInput}
                    placeholder='Buscar...'
                    value={searchInput}
                />
                <TouchableOpacity onPress={() => onSearchValidator(searchInput)}>
                    <AntDesign name="search1" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => cancelHandler()}>
                    <Entypo name="circle-with-cross" size={24} color="black" />
                </TouchableOpacity>
            </View>
            {error ? <View style={styles.errorMessageConteiner}>
                <Text style={styles.errorMessage}>{error}</Text>
            </View> : null}
        </>
    )
}

export default Search