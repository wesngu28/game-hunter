'use client'

import { createContext, useState } from 'react'
import { itadObject } from '../models/itadObject'
import { AppData } from '../models/steamStoreAPI'
import { twitchObject } from '../models/twitchObject'

type GameContextProviderProps = {
  children: React.ReactNode
}

type GameContextType = {
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
  steam: AppData | null
  setSteam: React.Dispatch<React.SetStateAction<AppData | null>>
  twitch: twitchObject | null
  setTwitch: React.Dispatch<React.SetStateAction<twitchObject | null>>
  itad: itadObject | null
  setITAD: React.Dispatch<React.SetStateAction<itadObject | null>>
}

export const GameContext = createContext<GameContextType | null>(null)

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [input, setInput] = useState<string>('')
  const [steam, setSteam] = useState<AppData | null>(null)
  const [twitch, setTwitch] = useState<twitchObject | null>(null)
  const [itad, setITAD] = useState<itadObject | null>(null)
  return (
    <GameContext.Provider value={{ input, setInput, steam, setSteam, twitch, setTwitch, itad, setITAD }}>{children}</GameContext.Provider>
  )
}