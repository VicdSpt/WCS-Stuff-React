import React, { createContext, useState, useContext } from 'react'

interface ProfileContextType{
    username: string,
    setUsername: (name: string) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

function ProfileProvider({children}: {children: React.ReactNode}) {
    const [username, setUsername] = useState("")
  return (
    <ProfileContext.Provider value ={{username, setUsername}}>
        {children}
    </ProfileContext.Provider>
  )
}

const useProfile = () => {
    const context = useContext(ProfileContext)
    if(!context){
        throw new Error ("Username must be used inside ThemeProvider")
    }
    return context
}

export {ProfileProvider, useProfile}
