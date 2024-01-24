import { RecoilRoot, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import { todoAtomFamily } from '../store/Atom'
// import UpdateTodo from './UpdatedTodo'
import { useState } from 'react'


export default function Todo(){
    const todo = useRecoilValueLoadable(todoAtomFamily)
    console.log(todo.state)
    const [title,setTitle] = useState()
     const [description,setDescription] = useState()
     const TitleChange = (e) => {
      setTitle(e.target.value)
    }
  
    const DescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    if (todo.state ==='loading'){
      return <div>Loading</div>
    }else if (todo.state === 'hasValue'){
    
    return(
      <div>
        Title : <input type ='text' value={title} onChange={TitleChange}></input>
            <br /><br />
       Description : <input type ='text' value={description} onChange={DescriptionChange}></input>
            <br /><br />
        <button onClick={() => {
               fetch('http://localhost:3000/createtodo ',{method : 'POST',
            body : JSON.stringify({title : title,description : description}),
            headers: {
                    'Content-Type': 'application/json'
                  }})
                  .then((res) => {res.json()})
      }}>Add Todo</button>

       {/* Update Todo logic  */}
        
        {todo.contents.map(e => {return(<div key={e._id} >
              <h3>{e.title}</h3>
              <h4>{e.description}</h4>

              <button onClick={() => {
                let id = e._id
               fetch(`http://localhost:3000/todo/${id} `,{method : 'PUT',
            body : JSON.stringify({title : title,description : description}),
            headers: {
                    'Content-Type': 'application/json'
                  }})
                  .then((res) => {res.json()})
      }}>Update</button>

      {/*  Delete Todo Logic  */}
      <button onClick={() => {
                let id = e._id
               fetch(`http://localhost:3000/todo/${id} `,{method : 'DELETE',
              headers: {
                    'Content-Type': 'application/json'
                  }})
                  .then((res) => {res.json()})
      }}>Delete</button>
              </div>)})}
      </div>
    )
  }
  else if (todo.state === 'hasError'){
    return <div>Problem occured in loading</div>
  }
}
