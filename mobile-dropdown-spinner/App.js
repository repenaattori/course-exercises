import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import { PaperProvider } from 'react-native-paper';
import { Dropdown } from 'react-native-paper-dropdown';


const products = [
  { label: 'iPhone 14', value: 0, price: 500 },
  { label: 'LG 55', value: 1, price: 855 },
  { label: 'Ryzen 5 3600', value: '2', price: 140 }
];


export default function App() {

  const [productId, setProductId] = useState(products[0].value);
  const [quantity, setQuantity] = useState(0);

  const selectedProduct = products.find(p => p.value == productId);


  return (
    <PaperProvider>
      <View style={styles.container}>
        <DropBox options={products} value={productId} onSelect={setProductId} />
        <QuantityView quantity={quantity} setQuantity={setQuantity} />
        <Order price={selectedProduct.price} quantity={quantity} productName={selectedProduct.label} />
      </View>
    </PaperProvider>
  );
}

function DropBox({ options, value, onSelect }) {
  return (
    <View style={styles.dropView}>
      <Dropdown
        label={'Product'}
        options={options}
        value={value}
        onSelect={onSelect}
      />
    </View>
  )
}

function QuantityView({ quantity, setQuantity }) {

  return (
    <View>
      <InputSpinner
        min={1}
        step={1}
        value={quantity}
        onChange={setQuantity}
        skin='paper'
      />
    </View>
  );
}

function Order({ productName, price, quantity }) {
  return (
    <View style={styles.order}>
      <Text style={styles.text}>{quantity} x {productName}</Text>
      <Text style={styles.text}>Total: {price * quantity}€</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    padding: 20
  },
  dropView: {
    marginBottom: 20
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  },
  order: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1
  }
});
