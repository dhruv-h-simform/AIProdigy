import React from 'react';
import { NativeBaseProvider } from 'native-base';
import AppNavigation from './navigation/AppNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux';
import { theme } from './theme';
import { ToastConfig } from './configs';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={theme}>
          <AppNavigation />
          <ToastConfig />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
