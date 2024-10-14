import { useState } from "react";

const Input = () => {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])

  const handleAddTask = (e) => {
    e.preventDefault()
    console.log(task);
    setTaskList((prevState) => {
      return [...prevState, task]
    })
  }

  const deleteHandler = (id) => {
    setTaskList((prevState => {
      return prevState.filter((_, index) => index !== id)
    }))
  }
  return (
    <>
      <form onSubmit={handleAddTask} className="flex gap-3">
        <input className="p-2" type="text" placeholder="Add task" value={task} onChange={(e) => setTask(e.target.value)} />
        <button className="bg-orange-500 text-white p-2 rounded" type="submit">Add</button>
      </form>

      <div className="w-full flex gap-2 mx-3">
        {taskList.length > 0 ? (
          taskList.map((task, index) => (
            <div className="border w-1/4 flex justify-between items-center rounded p-4 bg-blue-600 text-white">
              <span>{task}</span>
              <button onClick={() => deleteHandler(index)} className="bg-red-500 p-2 rounded">Delete</button>
            </div>
          ))
        )
          : (
            <span>No Task added</span>
          )}

      </div>
    </>
  );
}

export default Input;