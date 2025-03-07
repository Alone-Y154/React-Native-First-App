import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TodoScreen from '@/screens/TodoScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import "../global.css";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Todo List" component={TodoScreen} />
      <Drawer.Screen name="Edo new functionality" component={ProfileScreen} />
      {/* Add more screens as needed */}
    </Drawer.Navigator>
  );
}
