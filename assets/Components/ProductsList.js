import React, {useState} from 'react';
import {FlatList} from "react-native";
import ProductsItem from "./ProductsItem";

const ProductsList = ({products}) => {
    return(
        <FlatList
            data={products}
            keyExtractor={item => item.id.toString()} 
            renderItem={({item}) => {
                return <ProductsItem product={item} />; 
            }}
        />
    )
}


export default ProductsList;