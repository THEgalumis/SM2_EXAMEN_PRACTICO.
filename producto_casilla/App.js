import React, { useState } from 'react';
import { View, Button } from 'react-native';
import RegisterProduct from './components/RegisterProduct';
import FilterProducts from './components/FilterProducts';

export default function App() {
  const [screen, setScreen] = useState('Registro');

  return (
    <View style={{ flex: 1 }}>
      {screen === 'Registro' ? (
        <RegisterProduct />
      ) : (
        <FilterProducts />
      )}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
        <Button title="Registro de Producto" onPress={() => setScreen('Registro')} />
        <Button title="Filtrar Productos" onPress={() => setScreen('Filtrar')} />
      </View>
    </View>
  );
}
