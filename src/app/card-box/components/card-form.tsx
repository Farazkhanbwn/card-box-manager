import { useCardContext } from '@/context/card-context/card-context'
import CustomButton from '@/shared/components/custom-button/custom-button'
import { CustomButtonTypes } from '@/shared/components/custom-button/custom-button.types'
import CustomInput from '@/shared/components/custom-input/custom-input'
import { CustomInputTypes } from '@/shared/components/custom-input/custom-input.types'
import React, { useEffect, useState } from 'react'

const CardForm = () => {
  const { addCard, updatedCardItem, updateCard } = useCardContext()
  const [cardTitle, setCardTitle] = useState('')

  const handleCardOperations = () => {
    if (updatedCardItem) {
      updateCard(cardTitle)
    } else {
      addCard(cardTitle)
    }
    setCardTitle('')
  }

  const onCardSubmit = () => {
    if (!cardTitle) {
      return
    }
    handleCardOperations()
  }

  useEffect(() => {
    if (updatedCardItem) {
      setCardTitle(updatedCardItem.title)
    }
  }, [updatedCardItem])

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
      <CustomButton type={CustomButtonTypes.PRIMARY} onClick={onCardSubmit}>
        {updatedCardItem ? 'Update' : 'Add'} Box
      </CustomButton>
    </div>
  )
}

export default CardForm
