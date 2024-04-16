import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChangeText }) => {
    return (
        <TextInput
            style={styles.searchBar}
            placeholder="Search Products..."
            multiline={false}
            onChangeText={onChangeText}
            value={value}
        />
    );
};

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: '#fff', 
        marginTop: 10, 
        paddingHorizontal: 15, 
        paddingVertical: 10, 
        borderRadius: 10, 
        borderWidth: 2, 
        borderColor: '#ccc', 
    },
});

export default SearchBar;

