import React from 'react'
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import BottomWarning from '../components/BottomWarning';
import { useState } from 'react';
import axios from 'axios';
import { data } from 'react-router-dom';
import { ssrImportMetaKey } from 'vite/runtime';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='h-screen bg-slate-300 flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='bg-white w-80 rounded-lg text-center p-2 px-4 h-max'>
          <Heading label={'Sign In'} />
          <SubHeading description={'Enter Your Credentials To Access Your Account'} />
          <InputBox name={'Email'} place={'jhondoe@example.com'} onChange={(e) => { setEmail(e.target.value) }} />
          <InputBox name={'Password'} place={'******'} onChange={(e) => { setPassword(e.target.value) }} />
          <Button btnName={'Sign In'} onClick={async () => {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signin`, {
              email,
              password
            })
            console.log(res.data);      
          }} />
          <BottomWarning label={"Don't have an account?"} buttonText={'Sign up'} to={'/signup'} />
        </div>
      </div>
    </div>
  )
}

export default Signin