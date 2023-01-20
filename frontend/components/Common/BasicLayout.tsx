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

export default function BasicLayout({title, address, heading, subheading, children}: Props) {
  return (
    <div className='flex'>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <LeftMenu/>
        <div className='bg-bg pl-[42px] pt-[59px]'>
          <h3 className='text1 mb-[36px]'>{address}</h3>
          <h1 className='heading3'>{heading}</h1>
          <h2 className='heading4 mt-[15px]'>{subheading}</h2>
          <div>
            {children}
          </div>
        </div>
    </div>
  )
}