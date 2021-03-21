import React, { useContext } from 'react'
import {taskContext} from '../context/taskContext'
import Task from './task'
import Container from './container'
import * as containerStyles from './container.module.css'
const TaskList = ()=>{

    const {tasks} = useContext(taskContext);

    const mappedTasks=tasks? tasks.map((t)=>{return <Task task={t}>

    </Task>}) : null;


 return(

        
        <div className ={containerStyles.tasks} >
            <h2 style={{textAlign:"center"}} >Tasks to Do</h2>
        <ul>
            {tasks.length>0? mappedTasks : <p style={{color:'silver',textAlign:"center"}} >Nothing left to do!</p>}
        </ul>

        </div>
)

}

export default TaskList;