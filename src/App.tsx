import { FC, useState } from 'react';

 

import './style.css';

 

export const App: FC<{ name: string }> = ({ name }) => {

  const [todos, setTodos] = useState([])

  const [todo, setTodo] = useState('')

  const[task, setTask] = useState('')

  const[open, setOpen] = useState(false)

  const[changeTask, setChangeTask] = useState()

  const[id, setID] = useState(null)

 

  const handleNewTask = () => {

      const isTask = todos.find((t) => t == task)

 

      if(!isTask){

        const newTask = {

            value: task,

            id: new Date().getTime(),

            change: false

          }

          setTodos((prev) => [...prev, newTask])

          setTask('')

        }

}

 

const handleDelete = (id) => {

  const newArry = todos.filter((t) => t.id !== id)

  setTodos(newArry)

}

 

const handleChangeTask = () => {

  const replaceTask = todos.find((t) => t.id == id)

 

  replaceTask.value = changeTask

  const newArray = todos.find((t) => t.id == id)

  setChangeTask('')

  setOpen(false)

 

}

 

  return (

    <div className = "App">

      <h1>To Do List</h1>

      <input value = {task} onChange = {(event) => setTask(event.target.value) } />

      <button onClick = {handleNewTask}>Dodaj zadanie</button>

      <h1>ToDoList</h1>

      <div className = "ToDoList" />

      {open &&(

        <div className = "dwa">

          <h1>Zmiana tekstu</h1>

          <input value = {changeTask} onChange = {(event) => setChangeTask(event.target.value)} />

          <button onClick = {handleChangeTask}>Zapisz</button>

        </div>

      )}

 

      <div className = "flex-col">

        {

          todos.map((task )=> (

            <div className = "card" key = {task.id}>

              <p>{task.value}</p>

              <div className = "actions">

                <p onClick = {() => handleDelete(task.id)}>X</p>

                <p onClick = {() => {

                    setOpen(true)

                    setChangeTask(task.value)

                    setID(task.id)

                }}>*</p>

                <input type="checkbox" name = "check"/>

                </div>

          </div>

          ))

        }

      </div>

    </div>

  );

};
