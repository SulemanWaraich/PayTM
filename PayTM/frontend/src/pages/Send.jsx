import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import Friend from '../components/Friend'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

function Send() {
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState('');
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  console.log(id, name);
  
  return (
    <div className='h-screen flex justify-center items-center bg-slate-300'>
    <div className='bg-white rounded p-10 text-center w-96 space-y-2'>
      <div className='mb-4'>
      <Heading label={'Send Money'}/>
      </div>
      <Friend capital={name[0]} name={name}/>
      <InputBox name={'Amount (in Rs)'} place={'Enter Amount'} onChange={(e) => {setAmount(e.target.value)}}/>
      <Button onClick={async () => {
        console.log(localStorage.getItem("token"));
        console.log(amount);
        
        try {
          const res = await axios.post("http://localhost:3000/api/v1/account/transfer", {
          to: id,
          amount
        }, {headers: {
          authorization: 'Bearer ' + localStorage.getItem("token")
        }})
        console.log(res.data);
        } catch (error) { 
          console.log('failed', error);
          
        }}} btnName={'Initiate Transfer'}/>
    </div>
    </div>
  )
}

export default Send