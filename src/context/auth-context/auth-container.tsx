import React, { FC, PropsWithChildren, useLayoutEffect, useState } from 'react'
import { AuthProvider } from './auth-context'
import { AuthInterface, authStateDefaults } from './auth-interface'
import AuthService from '@/shared/services/auth-service'
import { useRouter } from 'next/navigation'

const AuthContainer: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<AuthInterface>(authStateDefaults)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const checkAuthStatusOnLoad = () => {
    const token = localStorage.getItem('token')
    // not a good approach as token verification is backend task
    if (!token) {
      router.push('/login')
    }
    setLoading(false)
    setState((prevState) => ({
      ...prevState,
      isAuthenticated: Boolean(token),
    }))
  }

  useLayoutEffect(() => {
    checkAuthStatusOnLoad()
  }, [])

  const login = async (email: string, password: string) => {
    const response = await AuthService.loginUser({ email, password })
    if (response.success) {
      localStorage.setItem('token', response.token)
      setState((prevState) => ({
        ...prevState,
        isAuthenticated: true,
      }))
    } else {
      throw new Error(response.message)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setState((prevState) => ({
      ...prevState,
      isAuthenticated: false,
    }))
    router.replace('/login')
  }

  if (loading) {
    return null
  }
  return <AuthProvider value={{ ...state, logout, login }}>{children}</AuthProvider>
}

export default AuthContainer
