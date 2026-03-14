
    //   iii. app.js - Main application
                  // TODO: Import task functions
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again
                  import { tasks,addTask, getAllTasks,completeTask } from './task.js'
                  addTask("complete assignment",'high',26)
                  addTask("doom scroll","low",27)
                  addTask("write record","medium",29)
                  completeTask(2)
                  console.log(getAllTasks())
        

                  