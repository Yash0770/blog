import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch, useSelector } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const {register, handleSubmit} = useForm()

    const login = async(data)=>{
        setError('')
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }
    
  return (
    <div className='w-100 w-full d-flex justify-content-center align-items-center'>
        <div className="mx-auto w-full max-w-lg bg-gray rounded-xl p-5 border">
            <div className="mb-2 d-flex justify-content-center ">
                <span className='inline-block w-100 w-full '>
                    <Logo width='100%'/>
                </span>
            </div>
            <h2 className='text-center font-bold'>
                Sign in to your account
            </h2>
            <p className='mt-2 text-center text-black'>
                Don&apos;t have any account?&nbsp;
                <Link>
                    Sign Up
                </Link>
            </p>
            {error && <p className='text-red text-center mt-4'>{error}</p>}

            <form onSubmit={handleSubmit(login)} className='mt-5'>
                <div className="my-4">
                    <Input
                    label='Email: '
                    placeholder="Enter your email"
                    type='email'
                    {...register('email',{
                        required: true,
                        validate: {
                            matchPatern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.text(value) || 'Email address must be a valid address'
                        }
                    })}
                    />
                    <Input
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    {...register('password',{
                        required: true
                    })}
                    />
                    <Button
                    type='submit'
                    className='w-full w-100'
                    >
                        Sign in
                    </Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login