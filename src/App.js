
import './App.css';
import Alert from './components/Alert';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from 'react';

// const initial = [
//   {id:uuidv4(),task:"wake up early"},
//   {id:uuidv4(),task:"dsa daily"},
//   {id:uuidv4(),task:"stop procastrination"}
// ]

const initial = localStorage.getItem("list")? JSON.parse(localStorage.getItem("list")):[]

function App() {

  const [list,setList] = useState(initial);

  const[task,setTask] = useState("");

  const [alert,setAlert] = useState("")

  const [id,setId] = useState(0)

  const [edit,setEdit] = useState(false);



  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(list));
  },[list])

  // alert for for showing the user

  const handleAlert= (type,msg) =>{

    setAlert({
      type:type,
      msg:msg
    })

    setTimeout(() => {
      setAlert("")
    }, 2000);
  }


  // onchanging evnet task is catched
  const handletask = (e) =>{
setTask(e.target.value)
  }


  // on submit of button
  const handleSubmit = (e) =>{
e.preventDefault();

// adding a task to the list
if(task!==""){

  if(edit){
    let tempedit = list.map(it=>{
      return it.id===id?{...it,task}:it;
    })

    setList(tempedit)
    handleAlert("success","item Edited")
    setEdit(false)

  }
  else{
    let temp = {id:uuidv4(),task}
  setList([...list,temp])
  handleAlert("success","Item added succesfully")
  setEdit(false)
  }
  setTask("")
}

else{
handleAlert("danger","cannot add an empty list")
}

  }

  // deleting all items
  const deleteAll = () =>{
    setList([]);
    setTask("")
    handleAlert("danger","All items deleted")
  }

// deleting an item
const handleDelete = (id) =>{
let templi  = list.filter((maal)=>{
  return maal.id!==id;
})
setList(templi)
handleAlert("danger"," item deleted")
}



// editing an item
const handleEdit = (id) =>{
let temped = list.find(cheez=>cheez.id===id)
let {task} = temped;
setTask(temped.task)
setId(id)
setEdit(true)
}

  return (
 <>
 <div className="container">
 <h1 className='text-center' style={{marginTop:"30px"}} >TODO-LIST</h1>
  <Alert alert={alert} />
  <TodoForm task={task} handletask={handletask} handleSubmit={handleSubmit} edit={edit} />
  <TodoList list={list} deleteAll={deleteAll} handleDelete={handleDelete}  handleEdit={handleEdit} />

 </div>


 </>
  );
}

export default App;
