import React from 'react';
import Image from 'next/image';
import logo from 'public/logo.svg';
import Link from 'next/link';
import data from 'public/img/LeftMenu/data.svg';
import analytics from 'public/img/LeftMenu/analytics.svg';
import exit from 'public/img/LeftMenu/exit.svg';
import faq from 'public/img/LeftMenu/faq.svg';
import profile from 'public/img/LeftMenu/profile.svg';

type Props = {}

function Exit(){

}

export default function LeftMenu({}: Props) {
  return (
    <div className='flex flex-col mt-[62px] ml-[44px] mr-[120px]'>
        <Image
            src={logo}
            alt=''
            className='mb-[47px]'
        />
      <Link href='/data' className='text1 text-[19px] text-inactive mb-[32px] links_hover'>Показания</Link>
      <Link href='/analytics' className='text1 text-[19px] text-inactive mb-[32px] links_hover'>Аналитика</Link>
      <Link href='/faq' className='text1 text-[19px] text-inactive mb-[32px] links_hover'>FAQ</Link>
      <Link href='/profile' className='text1 text-[19px] text-inactive mb-[404px] links_hover'>Профиль</Link>

      <div className='flex cursor-pointer text-center align-middle' onClick={Exit}>
        <Image src={exit} alt='' className=''/>
        <p className='text2 text-light_orange mt-[2px] ml-[16px]'>Выйти</p>
        </div>
    </div>
  )
}