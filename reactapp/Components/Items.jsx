import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Items.css'
function Items({task,date,onDelete}) {
    
    return (
        <>
           <div className='kgrow row'>
                <div className='task col-7'>{task}</div>
                <div className='task col-2'>{date}</div>
                <button type='button' className='col-1 btn btn-danger' onClick={(e)=>onDelete(task,e)}>Done</button>
           </div>
        </>
    )
}

export default Items;
