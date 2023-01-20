import React from 'react'
import Image, { StaticImageData } from 'next/image'

type Props = {
    cardTitle: string,
    cardDate: string,
    cardImg: StaticImageData,
    cardButton: string,
}

export default function Card({cardTitle, cardImg, cardDate, cardButton}: Props) {
  return (
    <div className='bg-white'>
        <Image src={cardImg} alt='' className='w-[61px] h-[61px]'/>
        <h3>{cardTitle}</h3>
        <h4>{cardDate}</h4>
        <p>{cardButton}</p>
    </div>
  )
}