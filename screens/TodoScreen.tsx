

// screens/HomeScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import TodoList from '@/components/TodoList';

const TodoScreen = () => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TodoList />
    </View>
  );
};

export default TodoScreen;
