import React,{useState,useEffect,useContext} from  'react'
import {taskContext} from '../context/taskContext'
import {Button,InputGroup,FormControl,Form} from 'react-bootstrap'
import * as containerStyles from './container.module.css'

const  generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`
}

const AddTask= ()=>{

    const [taskText,setTaskText] = useState("");
    const [taskTime,setTaskTime] = useState("")
     const { createTask ,tasks} = useContext(taskContext)

  
    console.group(tasks)
    return (<div className={containerStyles.taskAdder} >


        <Form onSubmit={(e)=>{

        e.preventDefault();
        let createdTask ={
            task : {
                text : taskText,
                time : taskTime,
            },
            id : generateKey(Math.random()),


        }
        createTask(createdTask);
        setTaskText("")
        }} >
        <InputGroup>
            <FormControl
            placeholder="Add Task"
            aria-label= "Add Task"
            aria-describedby="basic-addon2"
            required={true}
            type="text" value={taskText} onChange={(e)=>{setTaskText(e.target.value)}} 

            />
             
            <input  type="time" required={true} onChange={(e)=>{
                setTaskTime(e.target.value)
            }} />
            
        <InputGroup.Append>
       
        <Button type="submit" variant="outline-secondary"
        ize="sm" 
        
        >Add</Button>
        </InputGroup.Append>
    </InputGroup>
</Form>

        
       
        
    </div>)

}


export default AddTask;