import React,{useState, useEffect} from 'react'
import { supabase } from '../createClient1';
import { MdOutlinePendingActions } from "react-icons/md";


export default function Undone() {
    const [todos, setTodos] = useState({date: '', time:'' ,task: ''});
    const [users, setusers] = useState([]);
    const today = new Date()


    useEffect(() => {
        getusers()
      }, []);

    // async function onpending() {
    //     let today = new Date()
    //     if(todos.date == today){
    //         getusers()
    //     }else {
    //         <p>No pending Task for Today</p>
    //     }
    // }

    async function getusers(){
        await supabase
        const { data } = await supabase
        .from('users')
        .select('*')
        setusers(data)
        // fetchusers();
    }

  return (
    <div className='pending'>
      <MdOutlinePendingActions id='Head'/><p className='p2'><b>Pending Task List</b></p>
      <table>
            <thead>
                <tr>
                    <th id='date'>Date</th>
                    <th id='time'>S.no</th>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>
                {users.map((todos)=>
                    <tr key={todos.Time}>
                        <td id='sp1'>{todos.Date}</td>
                        <td id='sp2'>{todos.Time}</td>
                        <td>{todos.Task}</td>
                   </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}
