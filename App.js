import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Picker } from 'react-native';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const calculateResult = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operation) {
      case '+':
        setResult((number1 + number2).toString());
        break;
      case '-':
        setResult((number1 - number2).toString());
        break;
      case '*':
        setResult((number1 * number2).toString());
        break;
      case '/':
        setResult((number1 / number2).toString());
        break;
      default:
        setResult('Invalid Operation');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Number"
        onChangeText={text => setNum1(text)}
        value={num1}
        keyboardType="numeric"
      />
      <Picker
        style={styles.picker}
        selectedValue={operation}
        onValueChange={itemValue => setOperation(itemValue)}
      >
        <Picker.Item label="+" value="+" />
        <Picker.Item label="-" value="-" />
        <Picker.Item label="*" value="*" />
        <Picker.Item label="/" value="/" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Second Number  "
        onChangeText={text => setNum2(text)}
        value={num2}
        keyboardType="numeric"
      />
      <Button title="Calculate" onPress={calculateResult} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '50%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  picker: {
    width: '50%',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Calculator;