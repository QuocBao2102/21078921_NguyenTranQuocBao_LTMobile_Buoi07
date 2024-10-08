import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [name, setName] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={handleNameChange}
        value={name}
      />
      <Button
        title="GET STARTED"
        color="#46c0d6"
        onPress={() => {
          // Handle button press
          console.log('Name:', name);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    flex: 1,
    fontSize: 24,
    marginBottom: 20,
    color: '#800080',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: '80%',
  },
});

export default App;