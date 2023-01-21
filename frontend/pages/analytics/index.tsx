import React from 'react'
import MainPageLayout from 'layouts/MainPageLayout'
import Analytics from 'components/Analytics/Analytics'

type Props = {}

export default function index({}: Props) {
  return (
    <div className='flex'>
      <MainPageLayout title="Аналитика - Wyvern" address="164523, обл. Архангельская, г Северодвинск, пр-кт Ленина, д. 50, кв. 24" heading="Аналитика" subheading='Показания за месяц' children={<Analytics/>}/>
    </div>
  )
}