import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Items.css'
import '../Components/Items'
import Items from '../Components/Items';
function Todoitems({tasks, onDelete} ) {
    
    return (
        <>
           {tasks.map(t=><Items task={t.task} date={t.date} onDelete = {onDelete}></Items>)}
        </>
    )
}

export default Todoitems;