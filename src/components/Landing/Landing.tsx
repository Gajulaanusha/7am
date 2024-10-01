"use client"
import React, { useContext } from 'react'
import { Home } from '../Home'
import { Login } from '../Login'
import { appCxt } from '@/context/appCxt'

export const Landing = () => {
    const { state } = useContext(appCxt)
    return <div>
        {state?.isLoggedIn ? <Home /> : <Login />}
    </div>
}