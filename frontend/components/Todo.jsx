import { useEffect, React, useState } from 'react';
import { supabase } from '../createClient1';
import {AiOutlineDelete} from 'react-icons/ai';
import { FaRegEdit } from "react-icons/fa";
import { GrTask } from "react-icons/gr";


export default function Todo() {
    const [todos, setTodos] = useState({time:'' ,task: '', date:''});
    const [todos2, setTodos2] = useState({time:'' ,task: '', date:''});
    const [users, setusers] = useState([]);
    console.log(todos2)

    useEffect(() => {
      fetchusers()
    }, []);

    async function fetchusers(){
        const {data} = await supabase
            .from('users')
            .select('*')
            setusers(data)
  }
    function handleChange(event){
        setTodos(prevFormData=>{
            return{
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    function handleChange2(event){
        setTodos2(prevFormData=>{
            return{
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    async function createusers(){
        await supabase
        .from('users')
        .insert([
        { Date: todos.date, Time: todos.time, Task: todos.task }
        ])

        fetchusers();
    }
    async function deleteusers(todostime){
        let check = document.getElementsByClassName('check');
        if(check.checked = true){
            await supabase
            .from('users')
            .delete()
            .match({Time: todostime})
        }
        fetchusers()
    }
    async function displayusers(todos2time){
        users.map((todos)=>{
            if(todos.Time == todos2time){
                setTodos2({date: todos.Date, time: todos.Time ,task: todos.Task})
        }
    })}
    async function updateusers(todos2time){ 
        await supabase
            .from('users')
            .update({Date: todos2.date, Time: todos2.time ,Task: todos2.task})
            .match({ Time: todos2time })

        fetchusers()
    }

  return (
    <div className='Todolist'>
        <GrTask id='Head'></GrTask><p className='listhead'><b>Todo List</b></p>
        <form onSubmit={createusers}>
            <input className='inputbox0'
                type="date" 
                name="date" 
                onChange={handleChange}
            />
            <input className='inputbox1'
                type="time" 
                name="time" 
                placeholder="S.no"
                onChange={handleChange}
            />
            <input className='inputbox2'
                type="text" 
                name="task" 
                placeholder="Enter Task"
                onChange={handleChange}
            />
            <button className='set' type='submit'><b>Set</b></button>
        </form>

        <form onSubmit={()=>updateusers(todos2.time)}>
            <input className='inputbox0'
                type="date" 
                name="date" 
                onChange={handleChange2}
                defaultValue={todos2.date}
            />
            <input className='inputbox1'
                type="time" 
                name="time" 
                onChange={handleChange2}
                defaultValue={todos2.time}
            />
            <input className='inputbox2'
                type="text" 
                name="task" 
                placeholder='Updates..'
                onChange={handleChange2}
                defaultValue={todos2.task}
            />
            <button className='edit' type='submit'><b>Update</b></button>
        </form>
            <table>
                <thead>
                    <tr>
                        <th id='date'>Date</th>
                        <th id='time'>Time</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((todos)=>
                        <tr key={todos.Time}>
                            <td  id='sp1'>{todos.Date}</td>
                            <td  id='sp2'>{todos.Time}</td>
                            <td>{todos.Task}
                                <AiOutlineDelete id='mark'onClick={()=>{deleteusers(todos.Time)}} style={{marginLeft: '8px'}}>Done</AiOutlineDelete>
                                <FaRegEdit id='mark'onClick={()=>{displayusers(todos.Time)}}>Edit</FaRegEdit></td>
                        </tr>
                    )}
                </tbody>
            </table>
    </div>
  )
}
