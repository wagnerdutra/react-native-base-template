import React from 'react';
import { StyleSheet, View } from 'react-native';

import Todo from '~/components/Todo';
import './config/DevTools';

const App = () => (
  <View style={styles.container}>
    <Todo />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  }
});

export default App;
