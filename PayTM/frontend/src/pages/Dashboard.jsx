import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading';
import NavBar from '../components/NavBar';
import InputBox from '../components/InputBox';
import axios from 'axios';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import { Wallet } from "lucide-react"
import { Link } from "react-router-dom"


function Dashboard() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect( () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/bulk?name=` + filter)
    .then(res => {
      setUsers(res.data.user)
    });    
  }, [filter]);

  const navigate = useNavigate();
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

   <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
  {/* Card Container */}
  <div className="w-full max-w-3xl bg-white border border-gray-300 shadow-xl rounded-2xl p-6">
    <NavBar />

    <div className="w-full px-4 mt-6">
      <Heading label={"Your Balance $5000"} />

      <InputBox
        name={"Users"}
        place={"Search users..."}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />

      <div>
        <ul className="pt-6 space-y-6 text-2xl">
          {users.map((user) => {
            return (
              <div className="flex justify-between items-center p-3 border-b border-gray-200">
                <li className="flex items-center">
                  <button className="border rounded-full bg-slate-200 border-slate-100 px-3 py-1 mx-2 font-semibold">
                    {user.firstName[0]}
                  </button>
                  {user.firstName} {user.lastName}
                </li>

                <Button
                  onClick={(e) =>
                    navigate(
                      "/send?id=" + user._id + "&name=" + user.firstName
                    )
                  }
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </div>
            );
          })}
        </ul>
      </div>
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

export default Dashboard