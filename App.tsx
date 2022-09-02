import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import HomeNavigation from './src/navigations/HomeNavigation';

export default () => {
  return (
    <SafeAreaView style={styles.view}>
      <HomeNavigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  }
})