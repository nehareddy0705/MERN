// Assignment 1: 
// -------------
// Task Management System (ToDo App Modules):
//      Building a task manager like Todoist

// Requirements:
//      Create a modular todo app with 3 separate files:

       
          
        // i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      export function validateTitle(title) {
                            if(title.length >= 3){
                                return true
                            }
                            return false
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      export function validatePriority(priority) {
                        if (priority == 'low' || priority == 'medium' || priority == 'high'){
                            return true
                        }
                        return false
                      }
                      
                      // 3. Validate due date (must be future date)
                      export function validateDueDate(date) {
                        if (date > 25){
                            return true
                        }
                        return false
                      }





















