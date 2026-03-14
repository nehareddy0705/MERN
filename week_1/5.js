//we'll not use classes in mern stack
//class
// class can be reused in two ways - inheritance, composition
// to make it private put #
//creating a class
// class Student{
//     //properties
//     #sno;//private
//     name;
//     email;

//     //constructor - to intialize the objects
//     constructor(sno,name,email){
//         this.#sno = sno;
//         this.name = name;
//         this.email = email;
//     }
    
//     //methods
//     getStudentName(){
//         return this.#sno;
//     }  
// }
// let s1 = new Student(10,'neha','neha@email.com')
// let data = s1.getStudentName()
// console.log(data)


//optional chaining and nullish coalescing.

// const person = {
//     pid : 101,
//     name : 'neha'
// }
// console.log(person.marks) // undefined
// console.log(person.marks?.length) // undefined length // optinal chaining
// console.log(person.marks?.length??"marks not available") // nullish coalescing

