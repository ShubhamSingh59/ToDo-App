import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Inputform.css'
function Inputform({handlesubmit}) {
    const [task, setTask] = useState("")
    const [taskdate, setTaskdate] = useState("")
    const handlename = (e) =>{
        setTask(e.target.value);
    }
    const handledate = (e) =>{
        
        setTaskdate(e.target.value);
    }
    const newsubmit = (e)=>{
        handlesubmit(task,taskdate,e);
                setTask("");
                setTaskdate("");
    }
    return (
        <>
            <form className='row kgform' onSubmit={newsubmit}>
                <input className='col-7' placeholder='Task' type="text" value={task} onChange={handlename} />
                <input className='col-2' type="date" value={taskdate} onChange={handledate} />
                <button type="submit" className="col-1 btn btn-success">Submit</button>
            </form>
        </>
    )
}

export default Inputform;
