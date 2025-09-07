import React, { useState } from 'react'
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import BottomWarning from '../components/BottomWarning';
import axios from 'axios';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // {firstName}
  
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
      <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
        <Heading label={'Sign Up'}/>
        <SubHeading description={'Enter your information to create an account'}/>
        <InputBox onChange={(e) => {setFirstName(e.target.value)}} name={'First Name'} place={'Jhon'}/>
        <InputBox onChange={(e) => {setLastName(e.target.value)}} name={'Last Name'} place={'Doe'}/>
        <InputBox onChange={(e) => {setEmail(e.target.value)}} name={'Email'} place={'jhondoe@example.com'}/>
        <InputBox onChange={(e) => {setPassword(e.target.value)}} name={'Password'} place={'*****'}/> 
        <Button onClick={async () => 
          { 
            console.log(firstName, lastName, email, password);
            const res = await axios.post("http://localhost:3000/api/v1/user/signup", {
              firstName,
              lastName,
              email,
              password
            })
            console.log(res.data);
            
            localStorage.setItem('token', res.data.jwtToken);

          }} btnName={'Sign Up'}/>
        <BottomWarning label={"Already have an account?"} buttonText={"Login"} to={'/signin'}/>
      </div>      
      </div>
    </div>
  )
}

export default Signup