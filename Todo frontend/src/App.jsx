import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
// import { postTodoAtom, todoAtomFamily } from './Atom'
import Todo from './components/Todo'
// import AddTodo from './components/AddTodo'
// import {todoAtomFamily, updateTodoAtom } from './Atom'

// import UpdateTodo from './components/UpdatedTodo'
// import Deletetodo from './components/DeleteTodo'

function App() {
  
  return (
    <div>
      <RecoilRoot>
        <Todo />
      </RecoilRoot>
    </div>
  )
}

// function UpdateTodo(){
//   const todo = useRecoilValue(todoAtomFamily)
//   const [todoId,setTodoId] = useState('65abc4694ea0d1244ed77238')  
//   //  const setUpdate = useSetRecoilState(updateTodoAtom(id))
//   const IdChange = (e) => {
//     setTodoId(e.target.value)
//     console.log(todoId)
//   }
//   let  id = todoId 
//   const update = useRecoilValue(updateTodoAtom(id))
//   const OnClick =() => {
//       let y = todo.find(x => x.id === todoId)
//     return y
//   }
//   return(
//     <div>
//       id : <input type='number'value={todoId} onChange={IdChange}></input>
//       <button onClick={OnClick}>Update</button>
//     </div>
//   )
// }
export default App
