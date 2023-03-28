import { View, Text, StyleSheet } from 'react-native';

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreatePosts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CreatePostsScreen;
