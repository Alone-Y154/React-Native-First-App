// components/Header.tsx
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Menu } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity 
      onPress={() => navigation.toggleDrawer()}
      style={{ marginLeft: 15 }}
    >
      <Menu color="black" size={24} />
    </TouchableOpacity>
  );
}