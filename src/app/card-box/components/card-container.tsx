import React, { FC } from 'react'
import CardContainerColumn from './card-container-column'
import { useCardContext } from '@/context/card-context/card-context'

const CardContainer: FC = () => {
  const { cardsColumnCount, updatedCardItem } = useCardContext()
  const cardsArray = Array.from({ length: cardsColumnCount })
  const disableCardStyles = 'pointer-events-none opacity-50'
  const disableCardInteractionStyles = updatedCardItem ? disableCardStyles : ''

  return (
    <div className={`w-full flex gap-8 justify-between mx-auto mt-8 flex-1 ${disableCardInteractionStyles}`}>
      {cardsArray.map((_, index) => (
        <CardContainerColumn columnIndex={index} heading={`column ${index}`} key={`card-container-${index}`} />
      ))}
    </div>
  )
}

export default CardContainer
