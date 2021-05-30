import React, { Component } from 'react';
import './App.css';
import TodoList from "./todolist/TodoList";


class App extends Component {

    //serverUrl = "https://jsonplaceholder.typicode.com/todos/";

  componentDidMount = () => {
      console.log("enter App:componentDidMount");
  }

  render = () => {
      return (
          <div>
              <h1 align={"center"}>Software Testing <br/> TodoList</h1>
              <hr/>
              <TodoList/>
              <hr/>
              <div align={"Center"}>Azure hosted Todo-List</div>
          </div>
      )
  }

}

export default App;
