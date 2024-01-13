import React, { FC } from 'react'

interface CardContainerColumnProps {
  title?: string
  className?: string
}

const CardContainerColumn: FC<CardContainerColumnProps> = ({ title, className }) => {
  return (
    <div className={`max-w-[32rem] min-w-[25rem] w-full min-h-full bg-[#fafafa] shadow-lg p-8 ${className}`}>
      {title}
    </div>
  )
}

export default CardContainerColumn
