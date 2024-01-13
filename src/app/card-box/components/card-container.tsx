import React, { FC } from 'react'
import CardContainerColumn from './card-container-column'

interface CardContainerProps {
  totalCards: number
}

const CardContainer: FC<CardContainerProps> = ({ totalCards }) => {
  const cardsArray = Array.from({ length: totalCards })
  return (
    <div className="w-full flex gap-8 justify-between mx-auto mt-8 flex-1">
      {cardsArray.map((_, index) => (
        <CardContainerColumn columnIndex={index} heading={`column ${index}`} key={`card-container-${index}`} />
      ))}
    </div>
  )
}

export default CardContainer
