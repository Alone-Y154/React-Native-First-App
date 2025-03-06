import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TodoScreen from '@/screens/TodoScreen';
import ProfileScreen from '@/screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="To do List" component={TodoScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      {/* Add more screens as needed */}
    </Drawer.Navigator>
  );
}
