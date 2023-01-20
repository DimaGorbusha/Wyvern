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
    <div className='bg-white rounded-[20px] flex flex-col w-[513px]'>
        <div className='flex flex-row ml-[18px] mt-[21px] mb-[15px]'>
            <Image src={cardImg} alt='' className='w-[61px] h-[61px]'/>
            <div className='flex flex-col mt-[10px] ml-[17px]'>
                <h3 className='heading5 mb-[1px]'>{cardTitle}</h3>
                <h4 className='tag3 text-[14px] text-orange'>{cardDate}</h4>
            </div>
        </div>
        <p className='bg-main rounded-[14px] py-[20px] px-[169px] text-white btn1 cursor-pointer w-[475px] ml-[19px] mb-[20px] hover:text-main hover:bg-bg links_hover hover:delay-75 hover:ease-linear hover:duration-100' >{cardButton}</p>
    </div>
  )
}