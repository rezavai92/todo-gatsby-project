import React, { useEffect,useContext } from 'react'
import * as containerStyle from './container.module.css'
import CompletedTask from './completedTask'
import {taskContext} from '../context/taskContext'
import {ListGroup,Button} from 'react-bootstrap'
const CompletedTaskList = ()=>{
    const {completedTasks,cleanAllCompletedTasks} = useContext(taskContext)

    const mappedCompletedTasks = completedTasks.map((t)=>{
        return (<CompletedTask task={t} >

        </CompletedTask>)
    })
    return(<div className={containerStyle.completedTasks} >

        <h2 style={{textAlign:"center"}} > List of Completed Tasks</h2>
        {completedTasks.length>0? 
         <div style={{textAlign:"right",margin:"2%"}} >
         <Button variant="danger" onClick={()=>{
             cleanAllCompletedTasks()
         }} >Clean All</Button>
         </div>
        : null}
       <ListGroup>
       {mappedCompletedTasks}
       </ListGroup>

    </div>)

}

export default CompletedTaskList