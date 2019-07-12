import React, { useState } from 'react';

import { View, Text, Button } from 'react-native';

export default function Todo() {
  const [todos, setTodos] = useState([{ id: 0, text: 'Hello World!' }]);

  function handleClick() {
    setTodos([...todos, { id: Math.random(), text: 'Hello World!' }]);
  }

  return (
    <View>
      {todos.map(todo => (
        <Text key={todo.id}>{todo.text}</Text>
      ))}
      <Button title="Add todos" onPress={handleClick} />
    </View>
  );
}
