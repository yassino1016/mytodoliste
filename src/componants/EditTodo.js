import React, { useState } from 'react';


const EditTodo = ({ Edittodo,task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
      e.preventDefault();
      Edittodo(value, task.id);
      setValue(''); // Clear input after adding todo
    };
  
    return (
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input
          type='text'
          className='todo-input'
          value={value} // Bind input value to state
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit" className='todo-btn'>update</button>
      </form>
    );
  };

export default EditTodo

