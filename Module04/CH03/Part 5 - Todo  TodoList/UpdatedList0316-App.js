// Listing 3.16 Importing the TodoList component
/*
  The last thing you need to do is import the TodoList component into the App.js file and pass in the todos as a property.
*/
import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import Heading from './app/Heading'
import Input from './app/Input'
import Button from './app/Button'
import TodoList from './app/TodoList'

let todoIndex = 0

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
    this.submitTodo = this.submitTodo.bind(this)
  }

  submitTodo () {
    if (this.state.inputValue.match(/^\s*$/)) { 
      return
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex, 
      complete: false
    }
    todoIndex++ 
    
    const todos = [...this.state.todos, todo]
    this.setState({ todos, inputValue: '' }, () => {
      console.log('State: ', this.state)
    }) 
  }

  inputChange(inputValue) {
    console.log(' Input Value: ' , inputValue)
    this.setState({ inputValue })
  }

  render() {
    const { inputValue, todos } = this.state
    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={styles.content}>
          <Heading />
          <Input 
            inputValue={inputValue} 
            inputChange={(text) => this.inputChange(text)} />
          <TodoList todos={todos} />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App