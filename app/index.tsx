// Index.js
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import MyDrawer from '@/components/Drawer';
import "../global.css";

const Index = () => {
  return (
    <Provider store={store}>
      <MyDrawer />
    </Provider>
  );
};

export default Index;
