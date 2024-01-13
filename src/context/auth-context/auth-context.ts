import { createContext, useContext } from 'react'
import { AuthInterface, authStateDefaults } from './auth-interface'

const AuthContext = createContext<AuthInterface>(authStateDefaults)

export const AuthProvider = AuthContext.Provider

export const useAuthContext = () => useContext(AuthContext)
