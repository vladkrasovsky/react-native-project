import React from 'react';

import { useFonts } from 'expo-font';

import LoginScreen from './screens/auth/LoginScreen';
import RegistrationScreen from './screens/auth/RegistrationScreen';

const App = () => {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  });

  return <>{fontsLoaded && <LoginScreen />}</>;
  // return <>{fontsLoaded && <RegistrationScreen />}</>;
};

export default App;
