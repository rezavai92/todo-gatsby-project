import React ,{ useContext}from 'react'
import {ListGroup} from 'react-bootstrap'
import * as containerStyle from './container.module.css'
import {taskContext} from '../context/taskContext'
export default function CompletedTask(props) {

    const {undoCompletedTask,cleanCompletedTasks} = useContext(taskContext)
    return (
       
            <ListGroup.Item>
                <div className={containerStyle.completedTaskFlex} >
                <div className={containerStyle.completedTaskText} > 
                    {props.task.task.text}

                </div>
                <div className={containerStyle.completedTaskBtn} onClick={()=>{
                    undoCompletedTask(props.task.id)
                }}  >
                    undo
                </div>
                 <div className={containerStyle.completedTaskBtn} onClick={()=>{

                     cleanCompletedTasks(props.task.id)
                 }} >
                    x
                 </div>
                </div>
            </ListGroup.Item>
       
    )
}
