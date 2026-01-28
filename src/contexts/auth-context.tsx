"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { User } from "firebase/auth"

interface AuthContextType {
  user: User | null
  isLoading: boolean
  // login: (email: string, password: string) => Promise<void>
  // register: (email: string, password: string, name: string) => Promise<void>
  // logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChange((currentUser) => {
  //     setUser(currentUser)
  //     setIsLoading(false)
  //   })

  //   return () => unsubscribe()
  // }, [])

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

