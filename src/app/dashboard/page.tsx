"use client"

import { useUserStore } from '@/context/user'
import { logout } from '@/services/auth.service';
import { FC } from 'react';
import { useRouter } from "next/navigation"

const Dashboard: FC = () => {
  const {setAuth, auth} = useUserStore()
  const router = useRouter();

  const handleLogout = async() =>{
      const {data} = await logout();
      setAuth(false)

      router.replace('/auth')
  }

  return (
    <div>
      Dashboard
      <button className='py-4 px-8 bg-red-600 rounded-lg font-bold text-white' onClick={()=>handleLogout()}>Выйти</button>
    </div>
  )
}

export default Dashboard