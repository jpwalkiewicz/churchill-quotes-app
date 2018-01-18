import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button
} from 'react-native';
import winstonQuotes from './data/quotes';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteShow: '',
      counter: 0,
      width: 200,
      height: 200,
    };
    
  }
  
  numRand = () => {
    let quote = winstonQuotes[Math.floor(Math.random() * 80) + 0];
    this.setState({
      quoteShow: quote,
      counter: this.state.counter + 1,
      width: this.state.width - 3,
      height: this.state.height - 3,
    });
  }
  
  counterReset = () => {
    this.setState({
      counter: 0,
      width: 200,
      height: 200,
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        
        <Text style={{color: 'red', fontSize: 17, textAlign: 'center'}}>{this.state.quoteShow}</Text>
        <TouchableHighlight onPress={this.numRand}>
          <Image
            style={{width: this.state.width, height: this.state.height}}
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Sir_Winston_S_Churchill.jpg/220px-Sir_Winston_S_Churchill.jpg'}}
          />
        </TouchableHighlight>
        <Text style={{color: 'green', fontSize: 15, textAlign: 'center'}}>
          Dotykałeś Winstona {this.state.counter} {this.state.counter > 1 ? 'razy' : 'raz'}
        </Text>
        <Button
          onPress={this.counterReset}
          title="Resetuj Winstona"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
