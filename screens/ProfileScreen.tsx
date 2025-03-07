import React from 'react';
import { View, Text } from 'react-native';
import "../global.css";

const ProfileScreen = () => {
  return (
    <View className='flex flex-row outline-2 border outline-dashed justify-center items-center'>
      <Text className='text-lg font-bold'>Profile Screen</Text>
      <Text>Heellooooooo</Text>
    </View>
  );
};

export default ProfileScreen;