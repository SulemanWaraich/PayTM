import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading';
import NavBar from '../components/NavBar';
import InputBox from '../components/InputBox';
import axios from 'axios';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect( () => {
    axios.get("http://localhost:3000/api/v1/user/bulk?name=" + filter)
    .then(res => {
      setUsers(res.data.user)
    });    
  }, [filter]);

  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
    <div className='flex justify-center h-screen'>
      <div className='w-full px-4'>
      <Heading label={'Your Balance $5000'}/>
      <InputBox name={'Users'} place={'Search users...'} onChange={(e) => {setFilter(e.target.value)}}/>

      <div>
        <ul className='pt-6 space-y-6 text-2xl'>
        {users.map((user) => {
          return <div className='flex justify-between'>
            <li><button className='border rounded-full bg-slate-200 border-slate-100 px-2 mx-2 font-semibold'>{user.firstName[0]}</button>{user.firstName} {user.lastName}
          </li>
          
          <Button onClick={(e) => navigate("/send?id=" + user._id + "&name=" + user.firstName)} variant="contained" endIcon={<SendIcon />}>
          Send
          </Button>
          </div>
        })}
        </ul>
      </div>
      </div>
    </div>  
    </div>
  )
}

export default Dashboard