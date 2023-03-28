import { useContext } from 'react';

import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { AppContext } from '../../AppContext';

const LogoutBtn = () => {
  const { setIsAuth } = useContext(AppContext);

  const pressHandler = () => {
    setIsAuth(false);
  };

  return (
    <TouchableOpacity onPress={pressHandler} style={styles.btn}>
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 16,
  },
});

export default LogoutBtn;
