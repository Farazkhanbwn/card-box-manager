'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import style from './login.module.css'
import CustomHeading from '@/shared/components/custom-heading/custom-heading'
import CustomInput from '@/shared/components/custom-input/custom-input'
import { CustomInputTypes } from '@/shared/components/custom-input/custom-input.types'
import { CustomButtonTypes } from '@/shared/components/custom-button/custom-button.types'
import CustomButton from '@/shared/components/custom-button/custom-button'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/context/auth-context/auth-context'

const LoginPage = () => {
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { login, isAuthenticated } = useAuthContext()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { email, password } = formData

    try {
      setSubmitting(true)
      try {
        await login(email, password)
        router.push('/')
      } catch (err) {
        setError((err as { message: string }).message)
        setSubmitting(false)
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  return (
    <div className={style['main']}>
      <div className={style['container']}>
        <CustomHeading type="primary">Welcome</CustomHeading>
        <form className={style['form']} onSubmit={handleSubmit}>
          <CustomInput
            label="E-mail"
            name="email"
            type={CustomInputTypes.EMAIL}
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <CustomInput
            label="Password"
            name="password"
            type={CustomInputTypes.PASSWORD}
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleInputChange}
          />

          <p className={style['error_msg']}>{error}</p>

          <CustomButton disable={submitting} type={CustomButtonTypes.PRIMARY} className="font-medium text-2xl">
            Login
          </CustomButton>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
