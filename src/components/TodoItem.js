import React from 'react'
import {MdEdit,MdDelete} from 'react-icons/md';

const TodoItem = ({item,handleDelete,handleEdit}) => {

    const {id,task} = item;
  return (
    <div>
        <div className="container">
        <span>{task}</span>
     <button type="button" class="btn btn-success"  onClick={()=>handleEdit(id)} style={{marginLeft:"850px"}} ><MdEdit/></button>
     <button type="button" class="btn btn-danger"   onClick={()=>handleDelete(id)} style={{marginLeft:"50px"}}><MdDelete/></button>
        </div>

    </div>
  )
}

export default TodoItem
