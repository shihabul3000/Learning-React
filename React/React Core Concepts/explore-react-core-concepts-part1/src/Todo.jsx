// export default function Todo({task, isDone})
// {
//   //  props.task = 'ami Ghumabo';

//     return (
//         <li>Task : {task}</li>
//     )
// }

// conditional rendering option 1:
// export default function Todo({task, isDone})
// {
//  if(isDone === true){
//     return <li> Finished : {task}</li>
//  }

//  else{
//     return <li> Work on: {task}</li>
//  }


// }

//conditional rendering option : 2
// export default function Todo({task, isDone}){
//     if(isDone)
//         {
//             return <li> Finished : {task}</li>


//     }

// }

//conditional rendering 3 : ternary operator 
// export default function Todo({task, isDone}){
    
        
//             return <li> {isDone? 'Finished  ':'Work on'}: {task}</li>  // Ternary ---> operator --eita hocceh if else er shortcut version --so ekhane jeta hocceh seta hocche je i(isDone?) ? question mark tar mane hocceh jodi true hoy tahole(Finished ) are jodi nah hoy tahole (Work on)



    

// }

// CONDITIONAL rendaring option 4: && operator 
// export default function Todo({task, isDone}){
    
        
//             return(
//                  <li>{task} {isDone && ': Done'}   </li>
                
                
                
//                 )


    

// }

// CONDITIONAL rendaring option 4: && operator
export default function Todo({task, isDone}){
    
        
            return(
                 <li>{task} {isDone || ': Do IT'}   </li>
                
                
                
                )


    

}
