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
import { Wallet } from "lucide-react"
import { Link } from "react-router-dom"



function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
      <div className="min-h-screen bg-white">

          <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link to={'/'}>
          <div className="flex items-center space-x-2">
            
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">PakPay</span>
          </div>
            </Link>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md transition-colors font-medium cursor-pointer">
              <Link to={'/dashboard'}>
              Dashboard
             </Link>
            </button>
            <button className="px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md transition-colors font-medium cursor-pointer">
             <Link to={'/signin'}>
              Sign In
             </Link>
            </button>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors font-medium cursor-pointer">
              <Link to={'/signup'}>
              Sign Up
             </Link>
            </button>
          </div>
        </div>
      </nav>
 


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

    
    <footer className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <p className="text-gray-600 text-balance">
              PakPay - Your trusted digital payment solution for fast and secure transactions. © 2024 PakPay.
            </p>
          </div>
        </div>
      </footer>
      </div>
  )
}

export default Signin