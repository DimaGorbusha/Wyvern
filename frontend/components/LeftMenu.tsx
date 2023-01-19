import React from 'react';
import Image from 'next/image';
import logo from 'public/logo.svg';
import Link from 'next/link';

type Props = {}

export default function LeftMenu({}: Props) {
  return (
    <div className='flex flex-col mt-[62px] ml-[44px]'>
        <Image
            src={logo}
            alt=''
            className='mb-[47px]'
        />
      <Link href='/data' className='text1 text-[19px] text-inactive mb-[32px]'>Показания</Link>
      <Link href='/analytics' className='text1 text-[19px] text-inactive mb-[32px]'>Аналитика</Link>
      <Link href='/faq' className='text1 text-[19px] text-inactive mb-[32px]'>FAQ</Link>
      <Link href='/profile' className='text1 text-[19px] text-inactive mb-[32px]'>Профиль</Link>
    </div>
  )
}