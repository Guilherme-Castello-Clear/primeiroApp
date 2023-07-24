import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component{
  render(){
    let nome = 'Castello';
    let img = 'https://sujeitoprogramador.com/steve.png';
    return(
      <View>
        <Text>Olá Mundo!</Text>
        <Text style={{color: 'red', fontSize: 25, margin: 15}}>Sujeito Programador</Text>
        <Image
          source={{uri: img}}
          style={{width: 300, height: 300}}
        />
        <Text style={{fontSize:30, color: 'fuchsia'}}>{nome}</Text>
      </View>
    )
  }
}

export default App