import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const ProductsItems = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.imageUrl }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>{product.name}</Text>
                <Text style={styles.textDescription}>{product.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 10, 
        borderRadius: 25 
    },
    textContainer: {
        flex: 1 
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textDescription: {
        fontSize: 16,
    },
});

export default ProductsItems;
