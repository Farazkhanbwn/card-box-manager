import { createContext, useContext } from 'react'
import { CardDefaultValue, CardInterface } from './card-interface'

const CardContext = createContext<CardInterface>(CardDefaultValue)

export const CardProvider = CardContext.Provider

export const useCardContext = () => useContext(CardContext)
