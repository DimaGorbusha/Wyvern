import React, { ReactNode } from 'react'
import Head from 'next/head'
import LeftMenu from 'components/Common/LeftMenu'

type Props = {
  title: string,
  address: string,
  heading: string,
  subheading: string,
  children: ReactNode
}

export default function MainPageLayout({title, address, heading, subheading, children}: Props) {
  return (
    <div className='flex'>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <LeftMenu/>
        <div className='bg-bg pt-[59px] ml-[42px] flex flex-col'>
          <p className='text1 ml-[42px]'>{address}</p>
          <h1 className='heading3 mt-[36px] ml-[42px]'>{heading}</h1>
          <h2 className='heading4 mt-[15px] ml-[42px]'>{subheading}</h2>
          <div className='ml-[42px] mt-[18px]'>
            {children}
          </div>
        </div>
    </div>
  )
}