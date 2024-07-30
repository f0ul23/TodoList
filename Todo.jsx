import { useEffect, React, useState } from 'react';
import { supabase } from '../createClient1';

export default function Todo() {
    const [todos, setTodos] = useState({time:'' ,task: ''});
    const [todos2, setTodos2] = useState({time:'' ,task: ''});
    const [user, setUser] = useState([]);
    console.log(todos2)

    useEffect(() => {
      fetchUser()
    }, []);

    async function fetchUser(){
        const {data} = await supabase
            .from('user')
            .select('*')
            setUser(data)
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
    async function createUser(){
        await supabase
        .from('user')
        .insert([
        { Time: todos.time, Task: todos.task }
        ])

        fetchUser();
    }
    async function deleteuser(todostime){
            await supabase
            .from('user')
            .delete()
            .match({Time: todostime})

        fetchUser()
    }
    async function displayuser(todos2time){
        user.map((todos)=>{
            if(todos.Time == todos2time){
                setTodos2({time: todos.Time ,task: todos.Task})
        }
    })}
    async function updateUser(todos2time){ 
        await supabase
            .from('user')
            .update({Time: todos2.time ,Task: todos2.task})
            .match({ Time: todos2time })

        fetchUser()

    }


  return (
    <div>
        <h1 id='Head'>Todo List</h1>
        <form onSubmit={createUser}>
            <input className='inputbox1'
                type="number" 
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
            <button className='button1' type='submit'><b>Set</b></button>
        </form>

        <form onSubmit={()=>updateUser(todos2.time)}>
            <input className='inputbox1'
                type="number" 
                name="time" 
                onChange={handleChange2}
                defaultValue={todos2.time}
            />
            <input className='inputbox2'
                type="text" 
                name="task" 
                onChange={handleChange2}
                defaultValue={todos2.task}
            />
            <button className='button1' type='submit'><b>Update</b></button>
        </form>
        <table>
            <thead>
                <tr>
                    <th id='time'>S.no</th>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>
                {user.map((todos)=>
                    <tr key={todos.Time}>
                        <td id='sp2'>{todos.Time}</td>
                        <td>{todos.Task}
                            <button id='mark'onClick={()=>{deleteuser(todos.Time)}}>Done</button>
                            <button id='mark'onClick={()=>{displayuser(todos.Time)}}>Edit</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}
