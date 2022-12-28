'use client'

import { createContext, useState } from 'react'
import { Game } from '../models/itadObject'
import { Data } from '../models/steamStoreAPI'
import { twitchObject } from '../models/twitchObject'

type GameContextProviderProps = {
  children: React.ReactNode
}

type GameContextType = {
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
  steam: Data | null
  setSteam: React.Dispatch<React.SetStateAction<Data | null>>
  twitch: twitchObject | null
  setTwitch: React.Dispatch<React.SetStateAction<twitchObject | null>>
  itad: Game | null
  setITAD: React.Dispatch<React.SetStateAction<Game | null>>
}

export const GameContext = createContext<GameContextType | null>(null)

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [input, setInput] = useState<string>('')
  const [steam, setSteam] = useState<Data | null>(null)
  const [twitch, setTwitch] = useState<twitchObject | null>(null)
  const [itad, setITAD] = useState<Game | null>(null)
  return (
    <GameContext.Provider value={{ input, setInput, steam, setSteam, twitch, setTwitch, itad, setITAD }}>{children}</GameContext.Provider>
  )
}