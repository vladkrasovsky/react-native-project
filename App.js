import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from './router';
import { AppContext } from './AppContext';

const App = () => {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  });

  const [isAuth, setIsAuth] = useState(false);
  const routing = useRoute(isAuth);

  if (!fontsLoaded) return null;

  return (
    <AppContext.Provider value={{ isAuth, setIsAuth }}>
      <NavigationContainer>{routing}</NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
