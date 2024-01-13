'use client'
import React, { FC } from 'react'
import Card from './card'
import { useCardContext } from '@/context/card-context/card-context'

interface CardContainerColumnProps {
  heading?: string
  className?: string
  columnIndex: number
}

const CardContainerColumn: FC<CardContainerColumnProps> = ({ columnIndex, heading, className }) => {
  const { cards } = useCardContext()
  return (
    <div
      className={`max-w-[32rem] min-w-[25rem] w-full min-h-full bg-[#fafafa] shadow-lg p-8 overflow-y-scroll flex flex-col gap-4 ${className}`}
    >
      {heading}

      {cards
        .filter((card) => card.columnId === columnIndex)
        .map((card) => {
          return <Card key={card.id} id={card.id} title={card.title} columnIndex={card.columnId} />
        })}
    </div>
  )
}

export default CardContainerColumn
