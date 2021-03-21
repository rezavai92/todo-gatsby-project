import React,{useContext,useState,useEffect} from 'react' 
import {taskContext} from '../context/taskContext'
import * as containerStyles from "./container.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TaskModal from './modal'
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons'
import {Button,ListGroup} from 'react-bootstrap'
const Task= (props)=>{
    const {editTask,deleteTask}  = useContext(taskContext);
    const[isDelete,setIsDelete] = useState(false)
    const [isEdit,setIsEdit] = useState(false)
    const [updatedText,setUpdatedText] = useState("");
    const[updatedTime,setUpdatedTime] = useState("")
    const [willShowModal,setWillShowModal] = useState(false)

    useEffect(()=>{
        setUpdatedText(props.task.task.text)
        setUpdatedTime(props.task.task.time)

    },[])


    const onDeleteTask = ()=>{
        

        deleteTask(props.task.id)
        setWillShowModal(false)
        setIsDelete(false)
    }

    const onEditTask = ()=>{

        let updatedTask ={
            text : updatedText,
            time : updatedTime,
            id  : props.task.id
        }
        editTask(props.task.id,updatedTask)
        setWillShowModal(false)
        setIsEdit(false)
    }
    const closeHandler = ()=>{
        setUpdatedText(props.task.task.text)
        setIsDelete(false)
        setIsEdit(false)
        setWillShowModal(false)
    }

    return(<div    >

        <ListGroup.Item>
        <div className ={containerStyles.taskFlex} >
            <div>
            {props.task.task.text}
            </div>
            <div style={ {textAlign:"right"}}>
                {props.task.task.time}
            </div>
           
           <div style={{textAlign:"right"}}>

            <Button variant="info" size="sm" onClick={
                ()=>{
                    setIsEdit(true)
                    setWillShowModal(true);
                }
            } >
                     <FontAwesomeIcon icon={faEdit} size="sm" />
          
            </Button>

            {" "}
            <Button variant="danger" size ="sm"
            onClick={()=>{
                
                setWillShowModal(true)
                setIsDelete(true)
            }}
            > 
                    <FontAwesomeIcon icon={faTrash}  size="sm"  />
            
            </Button>
           </div>
            </div>
        </ListGroup.Item>
        

        {
            willShowModal && isDelete? 
            <TaskModal 
            willShowModal={willShowModal}  closeHandler={closeHandler} type="delete" buttonText="delete" deleteTaskHandler={onDeleteTask}  >
            
            </TaskModal>
            :null
        }

    {
            willShowModal && isEdit? 
            <TaskModal 
            willShowModal={willShowModal}  closeHandler={closeHandler} type="edit" 
            updatedText={updatedText}
            updatedTime ={updatedTime}
            updateTextChangeHandler={(text)=>{setUpdatedText(text)}}
            updatedTimeChangeHandler={(time)=>{setUpdatedTime(time)}}
            editTaskHandler={onEditTask}  >
            
            </TaskModal>
            :null
        }



    </div>)


}

export default Task;