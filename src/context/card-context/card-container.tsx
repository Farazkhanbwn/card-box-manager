import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import { CardDefaultValue, CardInterface } from './card-interface'
import { CardProvider } from './card-context'
import { uuid } from '@/shared/utils'

const CardContextContainer: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<CardInterface>(CardDefaultValue)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cardsDataAsString = localStorage.getItem('cards')
    const cards = JSON.parse(cardsDataAsString ?? '[]')
    setState({
      ...state,
      cards,
    })
    setLoading(false)
  }, [])

  useEffect(() => {
    !loading && localStorage.setItem('cards', JSON.stringify(state.cards))
  }, [state])

  const addCard = (title: string) => {
    setState((prevState) => ({
      ...prevState,
      cards: [
        ...prevState.cards,
        {
          id: uuid(),
          title,
          columnId: 0,
        },
      ],
    }))
  }

  const moveCardToNextColumn = (id: string) => {
    const findCardIndex = state.cards.findIndex((card) => card.id === id)
    const tempState = { ...state }
    const targetCard = tempState.cards[findCardIndex]
    if (targetCard && targetCard.columnId < state.cardsColumnCount - 1) {
      tempState.cards[findCardIndex].columnId++
      setState(tempState)
    }
  }

  const moveCardToPreviousColumn = (id: string) => {
    const findCardIndex = state.cards.findIndex((card) => card.id === id)
    const tempState = { ...state }
    const targetCard = tempState.cards[findCardIndex]
    if (targetCard && targetCard.columnId > 0) {
      tempState.cards[findCardIndex].columnId--
      setState(tempState)
    }
  }

  const deleteCard = (id: string) => {
    const fiteredCard = state.cards.filter((card) => card.id !== id)
    setState({
      ...state,
      cards: fiteredCard,
    })
  }

  return (
    <CardProvider value={{ ...state, addCard, moveCardToNextColumn, moveCardToPreviousColumn, deleteCard }}>
      {children}
    </CardProvider>
  )
}

export default CardContextContainer
