// App.tsx

import React from 'react';
import { StatusBar } from 'react-native';
import { BookingProvider } from './src/context/BookingContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <BookingProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F0" />
      <AppNavigator />
    </BookingProvider>
  );
}
