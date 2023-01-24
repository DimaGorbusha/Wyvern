import React from 'react'
import Image from 'next/image';
import analytic from 'public/img/analytic.png';

type Props = {}

export default function Analytics({}: Props) {
  return (
    <div className='pr-[570px] pb-[230px]'>
        <Image src={analytic} alt='' className='w-[600px] h-[500px] '/>
    </div>
  )
}