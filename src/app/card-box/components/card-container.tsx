import React from 'react'
import CardContainerColumn from './card-container-column'

const CardContainer = () => {
  return (
    <div className="w-full flex gap-8 justify-between mx-auto mt-8 flex-1">
      <CardContainerColumn title="Column 1" />
      <CardContainerColumn title="Column 2" />
      <CardContainerColumn title="Column 3" />
      <CardContainerColumn title="Column 4" />
    </div>
  )
}

export default CardContainer
