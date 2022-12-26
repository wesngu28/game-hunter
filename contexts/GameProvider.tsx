'use client'

import { createContext, useState } from 'react'
import { itadObject } from '../models/itadObject'
import { steamStoreAPIObject } from '../models/steamStoreAPI'
import { twitchObject } from '../models/twitchObject'

type GameContextProviderProps = {
  children: React.ReactNode
}

type GameContextType = {
  steam: steamStoreAPIObject | null
  setSteam: React.Dispatch<React.SetStateAction<steamStoreAPIObject | null>>
  twitch: twitchObject | null
  setTwitch: React.Dispatch<React.SetStateAction<twitchObject | null>>
  itad: itadObject | null
  setITAD: React.Dispatch<React.SetStateAction<itadObject | null>>
}

export const GameContext = createContext<GameContextType | null>(null)

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [steam, setSteam] = useState<steamStoreAPIObject | null>(null)
  const [twitch, setTwitch] = useState<twitchObject | null>(null)
  const [itad, setITAD] = useState<itadObject | null>(null)
  return (
    <GameContext.Provider value={{ steam, setSteam, twitch, setTwitch, itad, setITAD }}>{children}</GameContext.Provider>
  )
}