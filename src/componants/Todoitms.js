// Todoitms.jsx
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todos from './Todos';
import EditTodo from './EditTodo';

const Todoitms = () => {
  const [todos, setTodos] = useState([]);

 
  const addTodo = todo => {
    if (!todo.trim()) {
      alert(' your input is empty');
      return;}
    if (todos.some(existingTodo => existingTodo.task === todo))
    {
      alert('Todo already exists ');
      return;
    }
  
    setTodos(prevTodos => [...prevTodos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  };
  
const toggleComplete= id =>{
  setTodos(todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed} : todo ))
}
const Deletetodo= id  =>
setTodos(todos.filter(todo => todo.id !== id))

const Edittodo= id  =>
setTodos(todos.map(todo => todo.id === id ?
   {...todo, isEditing:!todo.isEditing} : todo ))

const edittask= (task,id) =>
setTodos(todos.map(todo => todo.id === id ?
   {...todo,task, isEditing:!todo.isEditing} : todo ))

  return (
    <div className='Todoitms'>
      <h1>My plans for todo</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
  todo.isEditing ? 
  <EditTodo
  Edittodo={edittask}
  task={todo}
   /> : (
    <Todos 
      task={todo} 
      key={index} 
      toggleComplete={toggleComplete}
      Deletetodo={Deletetodo} 
      Edittodo={Edittodo} />
  )
))}
      <div className='alert-message'>
        
      </div>
    </div>
  );
};

export default Todoitms;


