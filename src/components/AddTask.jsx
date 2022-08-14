import { useState } from 'react'

function AddTask({onAdd}) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('text cannot be empty.')
        }

        onAdd({text, day, reminder})

        //Clear input fields
        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label htmlFor="">Task</label>
            <input type="text" 
                    placeholder='Add Task' 
                    onChange={(e) => {
                        setText(e.target.value)
                    }} 
            value={text}/>
        </div>
        <div className='form-control'>
            <label htmlFor="">Day & Time</label>
            <input type="text" 
                    placeholder='Add  Day and Time' 
                    onChange={(e) => {
                        setDay(e.target.value)
                    }} 
                    value={day}/>
        </div>
        <div className='form-control form-control-check'>
            <label htmlFor="">Set Reminder</label>
            <input type="checkbox"
                    checked={reminder}
                    onChange={(e) => {
                        setReminder(e.currentTarget.checked)
                    }} />
        </div>
        <input type="submit" className='btn btn-block' value="Save Task" />
    </form>
  )
}

export default AddTask