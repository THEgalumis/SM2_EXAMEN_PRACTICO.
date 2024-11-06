import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, FlatList } from 'react-native';

const RegisterProduct = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    if (productName && category && quantity && price) {
      setProducts([
        ...products,
        { id: products.length + 1, name: productName, category, quantity, price }
      ]);
      setProductName('');
      setCategory('');
      setQuantity('');
      setPrice('');
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Producto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del Producto"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Cantidad"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Categoría"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Registrar Producto" onPress={handleAddProduct} />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>{item.name}</Text>
            <Text>{item.category}</Text>
            <Text>{`Cantidad: ${item.quantity}`}</Text>
            <Text>{`Precio: $${item.price}`}</Text>
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

export default RegisterProduct;
