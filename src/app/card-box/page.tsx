import CustomButton from '@/shared/components/custom-button/custom-button'
import { CustomButtonTypes } from '@/shared/components/custom-button/custom-button.types'
import CustomHeading from '@/shared/components/custom-heading/custom-heading'
import CustomInput from '@/shared/components/custom-input/custom-input'
import { CustomInputTypes } from '@/shared/components/custom-input/custom-input.types'
import React from 'react'
import CardContainer from './components/card-container'

const CardBox = () => {
  return (
    <div className="py-12 px-8 min-h-screen flex flex-col bg-white">
      <CustomHeading type="primary" className="text-center">
        Home Page
      </CustomHeading>
      <div className="container mx-auto flex justify-center gap-6">
        <CustomInput type={CustomInputTypes.TEXT} placeholder="Enter Title Here" />
        <CustomButton type={CustomButtonTypes.PRIMARY}>Add Box</CustomButton>
      </div>

      <CardContainer />
    </div>
  )
}

export default CardBox
