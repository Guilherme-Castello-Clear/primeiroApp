import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
    }

    this.pegaNome = this.pegaNome.bind(this)
  }

  pegaNome(text){
    if(text.length > 0){
      this.setState({nome: 'Bem vindo ' + text})
    }
    else{
      this.setState({nome: ''})
    }
  }


  render(){
    return(
      <View style={{}}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={(e) => this.pegaNome(e)}
        />

        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    )
  }
}


const styles= StyleSheet.create({
  container:{
    flex:1
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
    fontSize: 20,
    padding: 10
  },
  texto:{
    textAlign: 'center',
    fontSize: 25
  }
})

export default App