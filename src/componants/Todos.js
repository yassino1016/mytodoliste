import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Todos = ({task,toggleComplete, Deletetodo,Edittodo}) => {
  return (
    <div className='Todo'>
      <p onClick={()=> toggleComplete(task.id)} 
      
      className={task.completed ? 'completed' : ''}
      
      >{task.task}</p>
 <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => Edittodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => Deletetodo(task.id)} />
      </div>

    </div>
  )
}

export default Todos
