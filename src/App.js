import './App.css';
import HeaderComponent from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';


function App() {
  const [tasks, setTasks ] = useState([
      {
          id: 1,
          text: 'Food shopping',
          day: 'Feb 5th at 2:30pm',
          reminder: false 
      },
      {
          id: 2,
          text: 'Cloth washin',
          day: 'Oct 5th at 6:30pm',
          reminder: true 
      },
      {
        id: 3,
        text: 'Go dacing',
        day: 'Dec 5th at 6:30pm',
        reminder: true 
      }
  ])

  const [showForm, setShowForm] = useState(false)

  // Delete Task
  const deleteTask = (id) => {
   setTasks(tasks.filter(task => task.id !== id))
  }


  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        task.reminder = !task.reminder
        console.log(task.reminder)
      }
      return task
    }))
  }

  //Add task
  const addTask = (task) => {
    const new_task ={...task, id: tasks.length + 1}
    setTasks([...tasks, new_task])
  }

  //Toggle add frorm
  const toggleForm = () => {
    setShowForm(!showForm)
  }


  return (
    <div className="container">
        <HeaderComponent  toggleForm={toggleForm} showAdd={showForm}/>

        {showForm && <AddTask onAdd={addTask}/>}

        { tasks.length > 0 ? <Tasks tasks={tasks} 
                                    onDelete={deleteTask} 
                                    onToggle={toggleReminder}
                              /> : 'No task to display'}
    </div> 
  );
}

export default App;
