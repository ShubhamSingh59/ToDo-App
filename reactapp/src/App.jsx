import { useState } from 'react'
import './App.css'
import Inputform from '../Components/Inputform'
import Heading from '../Components/Heading'
import Todoitems from '../Components/Todoitems'
import Welcome from '../Components/Welcome'
function App() {

  const [tasks, setTasks] = useState([])
  const handleingsubmit = (taskName, taskDate, e) => {
    e.preventDefault();
    if (taskName.length === 0 || taskDate.length === 0) {
      alert('Task name and due Date cannot be empty.');
      return;
    }
    const newtask = [...tasks, { task: taskName, date: taskDate }]
    setTasks(newtask)
  }
  const handledelete = (taskName, e) => {
    e.preventDefault();
    const newtask = tasks.filter(item => item.task != taskName)
    setTasks(newtask)
  }
  return (
    <div>
      <div className='kgdiv'>
        <Heading></Heading>
        {tasks.length == 0 && <Welcome></Welcome>}
        <Inputform handlesubmit={handleingsubmit}></Inputform>
        <Todoitems tasks={tasks} onDelete={handledelete}></Todoitems>
      </div>
    </div>



  )
}

export default App
