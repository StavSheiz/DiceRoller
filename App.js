import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { BottomNavigationTabs } from './navigation/BottomoNavigationTabs'
import { NavigationContainer } from '@react-navigation/native';
import { colors } from './stlyes/color'
import { loadSound } from './common/RollButton'

export default class App extends React.Component {

  async componentWillMount() {
    loadSound();
  }

  render() {
    return (
      <NavigationContainer style={styles.container} >
        <StatusBar backgroundColor={colors.primaryDark} />
        <BottomNavigationTabs></BottomNavigationTabs>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.text
  }
});
