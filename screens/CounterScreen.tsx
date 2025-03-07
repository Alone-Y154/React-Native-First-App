import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/slices/counterSlice';

const CounterScreen = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View className='p-16 flex flex-col items-center gap-8'>
      <Text className='font-bold text-2xl'>Count: {count}</Text>
    <View className="flex-row justify-between gap-6">
      <Button title="Increment" onPress={() => dispatch(increment())} color="black"  />
      <Button title="Decrement" onPress={() => dispatch(decrement())}  />
    </View>
       </View>
  );
};

export default CounterScreen;
