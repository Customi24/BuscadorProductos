import React, {useState} from 'react';
import {View, StyleSheet} from "react-native";
import SearchBar from './assets/Components/SearchBar';
import ProductsList from './assets/Components/ProductsList';
import products from "./data";

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredProducts(filtered);
  }

    return(
        <View style={styles.container}>
          <SearchBar value={search} onChangeText={handleSearch} />
            <ProductsList products={filteredProducts} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textDescription: {
        fontSize: 16,
        marginBottom: 20,
    },
});

export default App;
