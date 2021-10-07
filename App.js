import * as React from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import HomeScreen from './Screens/HomeScreen'
import SummaryScreen from './Screens/SummaryScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen,
})

const AppContainer = createAppContainer(AppNavigator)
