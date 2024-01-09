import {useState} from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDate('')
        setReminder(false)
    }
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" 
            value={text} onChange={(e) => setText(e.target.value)}>

            </input>
        </div>
        <div className="form-control">
            <label>Day and Time</label>
            <input type="text" placeholder="Add Date and Time"
            value={day} onChange={(e) => setDate(e.target.value)}>
                
            </input>
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" checked={reminder}
             value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}>
                
            </input>
        </div>

        <input type="submit" value={'save task'} className="btn btn-block"></input>
    </form>
  )
}

export default AddTask