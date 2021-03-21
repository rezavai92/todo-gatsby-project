
import React,{useContext,useState,useEffect} from 'react'
import {taskContext} from '../context/taskContext'

import {Form,InputGroup,Button,FormControl} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'


const  TaskModal = (props)=>{
    const [show, setShow] = useState(true);
  
    const handleClose = () => {


   //     props.addButtonHandler()
        props.closeHandler()
        setShow(false)
    };

   
    return (
      <>
       
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             
             {props.type=="edit"?
             
                <div>
                    <Form onSubmit={(e)=>{

                        e.preventDefault();

                        props.editTaskHandler();
                        handleClose();
                    }} >
                    <InputGroup>
                        <FormControl
                        
                        aria-describedby="basic-addon2"
                        required={true}
                        type="text"
                         value={props.updatedText} 
                         onChange={(e)=>{ props.updateTextChangeHandler(e.target.value)}} 

                        />
                    <InputGroup.Append>
                    <input type="time" required={true} value={props.updatedTime}  onChange={(e)=>{ props.updatedTimeChangeHandler(e.target.value)}}   />
                    <Button type="submit" variant="outline-secondary"
                    ize="sm" 
                    
                    >Add</Button>
                    </InputGroup.Append>
                </InputGroup>
                    </Form>
                </div>
             :
             <div>
                 <p>Are you sure ,You have finished the task ?</p>
                 <Button onClick={()=>{
                     props.deleteTaskHandler();
                     handleClose();
                
                }} >Finish</Button>

             </div>
             }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
           
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  

  export default TaskModal;