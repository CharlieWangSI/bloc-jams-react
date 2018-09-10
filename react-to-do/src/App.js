import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
<<<<<<< HEAD
      ],
        newTodoDescription: ''
    };
  }

  handleChange(e) {
     this.setState({ newTodoDescription: e.target.value })
   }

  handleSubmit(e) {
     e.preventDefault();
     if (!this.state.newTodoDescription) { return }
     const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
     this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
   }

   handleDelete(index) {
      const todos = this.state.todos.slice();
      const todoLeft = todos.filter(todos => todos[index]);
      this.setState({ todos: todoLeft});
    }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

=======
      ]
    };
  }

>>>>>>> checkpoint-8-propsnstate

  render() {
    return (
      <div className="App">
       <ul>
        { this.state.todos.map( (todo, index) =>
<<<<<<< HEAD
<<<<<<< HEAD
          <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
=======
          <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index)} deleteStatus={() => this.handleDelete(index)} />
>>>>>>> jams-checkpoint-1-config
        )}
       </ul>
       <form onSubmit={ (e) => this.handleSubmit(e) }>
           <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
           <input type="submit" />
<<<<<<< HEAD
       </form>
=======
          <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />
        )}
       </ul>
>>>>>>> checkpoint-8-propsnstate
=======
      </form>
>>>>>>> jams-checkpoint-1-config
      </div>
    );
  }
}

export default App;
