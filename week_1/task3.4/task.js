//  ii. task.js - Task operations
                    // TODO: Import validator functions
                    import {validateTitle,validatePriority,validateDueDate} from './validator.js';
                    
                    export let tasks = [];
                    
                    // 1. Add new task
                    export function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                      try {if(validateTitle(title) && validatePriority(priority) && validateDueDate(dueDate)){
                        tasks.push({taskId: tasks.length+1,title,priority,dueDate})
                        return 'Success'
                      }
                    }
                    catch(err){
                        return err.message
                    }
                      
                    }
                    
                    // 2. Get all tasks
                    export function getAllTasks() {
                      // Return all tasks
                      return tasks
                    }
                    
                    // 3. Mark task as complete
                    export function completeTask(taskId) {
                      // Find task and mark as complete
                      return true

                    }

                  // Export functions