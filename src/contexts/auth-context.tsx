"use client"

import { createContext, useContext } from "react"

import { AUTH_MESSAGES } from "@/lib/messages"
import { Auth } from "@/types/Auth"

interface AuthContextType {
}

// Contexto para agregar las evaluaciónes de autenticidad
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: Auth) {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) throw new Error(AUTH_MESSAGES.authProvider)
  return context
}

