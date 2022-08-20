import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({list,deleteAll,handleDelete,handleEdit}) => {
  return (
  <>

  <div className="container " style={{marginTop:"50px"}} >
  <ul class="list-group">
 {list.map(item=>{
    return  <li  key={item.id} class="list-group-item"><TodoItem item={item} handleDelete={handleDelete} handleEdit={handleEdit}/></li>
 })}
</ul>
<div class="d-grid gap-2 col-6 mx-auto my-3 ">

  {list.length>0 && <button class="btn btn-primary" type="button" onClick={deleteAll} >Clear All items</button>}
</div>
</div>
  </>
  )
}

export default TodoList
