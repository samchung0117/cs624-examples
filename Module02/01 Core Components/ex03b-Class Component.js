import {Component} from 'react';
import {Text, View} from 'react-native';

class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello, world! Class Component!</Text>
      </View>
    );
  }
}

export default App;