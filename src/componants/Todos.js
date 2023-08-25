import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons'

const Todos = ({task,toggleComplete, Deletetodo,Edittodo,isMasked}) => {
  return (
    <div className='Todo'>
      <p onClick={()=> toggleComplete(task.id)} 
      
      className={task.completed ? 'completed' : ''}

      >{task.task}</p>
       <div className={`Todo ${isMasked ? 'masked' : ''}`}></div>
      <div>
       
        <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => Edittodo(task.id)}
            className="icon-btn edit-icon"
        />
        <FontAwesomeIcon
            icon={faTrash}
            onClick={() => Deletetodo(task.id)}
            className="icon-btn delete-icon"
        />
      </div>
    </div>
  )
}

export default Todos
