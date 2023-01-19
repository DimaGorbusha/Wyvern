import React from 'react'
import LeftMenu from 'components/LeftMenu'
import Head from 'next/head'

type Props = {}

export default function index({}: Props) {
  return (
    <div>
        <Head>
            <title>Показания - Wyvern</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <LeftMenu/>
    </div>
  )
}