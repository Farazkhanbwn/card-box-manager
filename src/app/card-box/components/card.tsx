import { useCardContext } from '@/context/card-context/card-context'
import CustomButton from '@/shared/components/custom-button/custom-button'
import { CustomButtonTypes } from '@/shared/components/custom-button/custom-button.types'
import CustomHeading from '@/shared/components/custom-heading/custom-heading'
import React, { FC } from 'react'

interface CardProps {
  id: string
  title?: string
  columnIndex: number
}

const Card: FC<CardProps> = ({ id, columnIndex, title }) => {
  const { moveCardToNextColumn, moveCardToPreviousColumn, deleteCard, cardsColumnCount } = useCardContext()
  const isNextButtonDisabled = columnIndex > cardsColumnCount - 2
  const isBackButtonDisabled = columnIndex <= 0
  return (
    <div
      id={`${columnIndex}`}
      className="flex flex-col justify-evenly border border-black/30 bg-white rounded-xl overflow-hidden"
    >
      <CustomHeading type="secondary" className="text-center pb-12 pt-16 !mb-0">
        {title}
      </CustomHeading>
      <div className="flex">
        <CustomButton
          disable={isBackButtonDisabled}
          type={CustomButtonTypes.SECONDARY}
          className="rounded-none flex-1"
          onClick={() => moveCardToPreviousColumn(id)}
        >
          Back
        </CustomButton>
        <CustomButton type={CustomButtonTypes.SECONDARY} className="rounded-none flex-1">
          Edit
        </CustomButton>
        <CustomButton type={CustomButtonTypes.SECONDARY} className="rounded-none flex-1" onClick={() => deleteCard(id)}>
          Delete
        </CustomButton>
        <CustomButton
          disable={isNextButtonDisabled}
          type={CustomButtonTypes.SECONDARY}
          className="rounded-none flex-1"
          onClick={() => moveCardToNextColumn(id)}
        >
          Next
        </CustomButton>
      </div>
    </div>
  )
}

export default Card
