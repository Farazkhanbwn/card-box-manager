import { useCardContext } from '@/context/card-context/card-context'
import CustomButton from '@/shared/components/custom-button/custom-button'
import { CustomButtonTypes } from '@/shared/components/custom-button/custom-button.types'
import CustomInput from '@/shared/components/custom-input/custom-input'
import { CustomInputTypes } from '@/shared/components/custom-input/custom-input.types'
import React, { useState } from 'react'

const CardForm = () => {
  const { addCard } = useCardContext()
  const [cardTitle, setCardTitle] = useState('')

  const onAddCard = () => {
    if (cardTitle) {
      addCard(cardTitle)
      setCardTitle('')
    }
  }
  return (
    <div className="container mx-auto flex justify-center gap-6">
      <CustomInput
        type={CustomInputTypes.TEXT}
        placeholder="Enter Title Here"
        value={cardTitle}
        onChange={(e) => {
          setCardTitle(e.target.value)
        }}
      />
      <CustomButton type={CustomButtonTypes.PRIMARY} onClick={onAddCard}>
        Add Box
      </CustomButton>
    </div>
  )
}

export default CardForm
