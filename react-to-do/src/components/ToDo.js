import React, { Component } from 'react';

 class ToDo extends Component {
   render() {
     return (
       <li>
<<<<<<< HEAD
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
=======
         <input type="checkbox" checked={ this.props.isCompleted } />
>>>>>>> checkpoint-8-propsnstate
         <span>{ this.props.description }</span>
         <input type="button" value="Delete" onChange={this.props.handleDelete}/>
       </li>
     );
   }
 }

export default ToDo;
