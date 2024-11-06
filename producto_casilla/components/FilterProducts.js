import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, FlatList, View } from 'react-native';

const FilterProducts = () => {
  const [products] = useState([
    { id: 1, name: 'Producto A', category: 'Electrónica' },
    { id: 2, name: 'Producto B', category: 'Ropa' },
    { id: 3, name: 'Producto C', category: 'Electrónica' },
    { id: 4, name: 'Producto D', category: 'Alimentos' },
    { id: 5, name: 'Producto E', category: 'Ropa' },
  ]);

  const [filteredCategory, setFilteredCategory] = useState('');

  const filteredProducts = filteredCategory
    ? products.filter((product) => product.category === filteredCategory)
    : products;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtrar Productos por Categoría</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe la categoría"
        value={filteredCategory}
        onChangeText={setFilteredCategory}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>{item.name}</Text>
            <Text>{item.category}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  productItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
});

export default FilterProducts;
