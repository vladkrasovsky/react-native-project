import { View, Text, StyleSheet } from 'react-native';

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Posts</Text>
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

export default PostsScreen;
