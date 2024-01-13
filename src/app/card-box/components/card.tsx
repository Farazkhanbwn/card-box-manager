import CustomButton from '@/shared/components/custom-button/custom-button'
import { CustomButtonTypes } from '@/shared/components/custom-button/custom-button.types'
import CustomHeading from '@/shared/components/custom-heading/custom-heading'
import React, { FC } from 'react'

interface CardProps {
  title?: string
}

const Card: FC<CardProps> = ({ title }) => {
  return (
    <div className="flex flex-col justify-evenly border border-black/30 bg-white rounded-xl overflow-hidden">
      <CustomHeading type="secondary" className="text-center pb-12 pt-16 !mb-0">
        {title}
      </CustomHeading>
      <div className="flex">
        <CustomButton type={CustomButtonTypes.SECONDARY} className="rounded-none flex-1">
          Back
        </CustomButton>
        <CustomButton type={CustomButtonTypes.SECONDARY} className="rounded-none flex-1">
          Edit
        </CustomButton>
        <CustomButton type={CustomButtonTypes.SECONDARY} className="rounded-none flex-1">
          Delete
        </CustomButton>
        <CustomButton type={CustomButtonTypes.SECONDARY} className="rounded-none flex-1">
          Next
        </CustomButton>
      </div>
    </div>
  )
}

export default Card
