//import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todo } from './MyComponents/Todo';

import { Footer } from './MyComponents/Footer';
import React, { useState } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import { useEffect } from 'react';
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const  onDelete=(todo)=>{
    console.log("I am ondelete",todo)
   setTodos(todos.filter((e)=>{
      return e!==todo;
   }));
   localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo=(title,desc)=>{
    console.log("i am adding",title,desc)
    let sno;
    if(todos.length==0)
    sno=1;
    else
     sno=todos[todos.length-1].sno+1
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,

    }
    setTodos([...todos,myTodo]);
   
    console.log(myTodo)
  }
  const [todos,setTodos]=useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  return (
    <>
     <Header title="Todo List" searchBar={false}/>
     <AddTodo addTodo={addTodo}/>
    <Todo todos={todos} onDelete={onDelete}/>
    
    <Footer/>
    </>
  );
}

export default App;
