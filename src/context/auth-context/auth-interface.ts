export interface AuthInterface {
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const authStateDefaults: AuthInterface = {
  isAuthenticated: false,
  login: function (): Promise<void> {
    throw new Error('Function not implemented.')
  },
  logout: function (): void {
    throw new Error('Function not implemented.')
  },
}
