import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component{
  render(){
    let nome = 'Castello';
    return(
      <View>
        <Text>Olá Mundo!</Text>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>Sujeito Programador</Text>
        <Jobs l={500} a={100} imgLabel={'Steve Jobs'}/>
        <Text style={{fontSize:30, color: 'fuchsia'}}>{nome}</Text>
      </View>
    )
  }
}

class Jobs extends Component{
  render(){
    let img = 'https://sujeitoprogramador.com/steve.png';
    
    return(
      <View>
        <Image 
          source={{ uri: img }}
          style={{ width: this.props.l, height: this.props.a}}
        />
        <Text style={{fontSize: 35, color: 'green'}}>{this.props.imgLabel}</Text>
      </View>
    );
  }
}

export default App