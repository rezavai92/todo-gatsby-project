import React, { useContext } from 'react'
import {taskContext} from '../context/taskContext'
import Task from './task'
import Container from './container'
import * as containerStyles from './container.module.css'
const TaskList = ()=>{

    const {tasks} = useContext(taskContext);
    console.log("tasks are", tasks)
    const mappedTasks=tasks? tasks.sort((x,y)=>{

        let x_hour = Number(x.task.time.split(":")[0]);
        let y_hour = Number(y.task.time.split(":")[0]) ;

        let x_min = Number(x.task.time.split(":")[1]);
        let y_min = Number(y.task.time.split(":")[1]) ;

        if(x_hour>y_hour){
            return 1
        }
        else if(x_hour<y_hour) {
            return -1
        }
        else{
            if(x_min>y_min){
                return 1
            }
            else {
                return -1
            }
        }
    }).map((t)=>{return <Task task={t}>

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