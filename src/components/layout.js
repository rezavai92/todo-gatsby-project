import React from 'react' 
import AddTask from  './addtask'
import TaskList from './tasklist'
import * as containerStyle from './container.module.css'
import CompletedTaskList  from './completedTaskList'
import Container from './container'


const Layout= ()=>{


    return(

      <Container>
        <AddTask  />

        <TaskList/>

     

        <CompletedTaskList  />

            
      </Container>
    )


}

export default Layout;