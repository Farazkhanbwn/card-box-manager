import CustomHeading from '@/shared/components/custom-heading/custom-heading'
import React from 'react'
import CardContainer from './components/card-container'
import CardForm from './components/card-from'

const CardBox = () => {
  const totalCards = 4
  return (
    <div className="py-12 px-8 min-h-screen flex flex-col bg-white">
      <CustomHeading type="primary" className="text-center">
        Home Page
      </CustomHeading>
      <CardForm />
      <CardContainer totalCards={totalCards} />
    </div>
  )
}

export default CardBox
