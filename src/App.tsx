import {View} from 'react-native';
import React from 'react';
import {NativeBaseProvider, Text} from 'native-base';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {BerandaScreen} from './screens';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <BerandaScreen />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
