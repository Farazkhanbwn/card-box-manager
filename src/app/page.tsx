'use client'
import CardContextContainer from '@/context/card-context/card-container'
import CardBox from './card-box/page'

export default function Home() {
  return (
    <CardContextContainer>
      <CardBox />
    </CardContextContainer>
  )
}
