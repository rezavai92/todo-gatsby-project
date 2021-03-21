import React,{createContext,useState} from 'react'

export const taskContext = createContext();


const TaskProvider =(props)=>{

    const [tasks,setTasks] = useState([])
    const [completedTasks,setCompletedTasks] = useState([])

    const createTask =(task)=>{

        const existingTasks =[...tasks];
        existingTasks.push(task);
        setTasks(existingTasks);
    }

    const deleteTask = (taskId)=>{

        const  existingTasks =[...tasks];
      
       const filteredTasks= existingTasks.filter((t)=>{return t.id!==taskId});

       setTasks(filteredTasks)

       const existingCompletedTasks =[...completedTasks];

       const finishedTask = existingTasks.find((t)=>{
        return t.id===taskId;
    })
       existingCompletedTasks.unshift(finishedTask);

       setCompletedTasks(existingCompletedTasks)

    }

    const editTask = (taskId,updatedTask)=>{
        let existingTasks =[...tasks];

      let updatedTasks= existingTasks.map((t)=>{
           if(t.id==taskId){
               t.task = updatedTask;
           }
           return t;
       })
       console.log("from context , updated tasks",updatedTasks);
       setTasks(updatedTasks)
    }

    const cleanAllCompletedTasks=()=>{

        setCompletedTasks([]);
    }

    const cleanCompletedTasks= (taskId)=>{
        const existingCompletedTasks =[...completedTasks];

       setCompletedTasks(existingCompletedTasks.filter((t)=>{
            return t.id!=taskId;
        }) )

    }


    return(<taskContext.Provider value={ {createTask,cleanCompletedTasks,cleanAllCompletedTasks , editTask,deleteTask,completedTasks,tasks }}>
        {props.children} 
    </taskContext.Provider>)


}

export default TaskProvider;