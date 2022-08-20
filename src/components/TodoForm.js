import React from 'react'

const TodoForm = ({task,handletask,handleSubmit,edit}) => {
  return (
    <>
    <div className="container">
    <form onSubmit={handleSubmit} >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Wish your list</label>
    <input type="text" class="form-control" value={task} onChange={handletask} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <button type="submit" class="btn btn-primary">{edit?"Edit":"Add an item"}</button>
</form>
    </div>
    </>


  )
}

export default TodoForm
