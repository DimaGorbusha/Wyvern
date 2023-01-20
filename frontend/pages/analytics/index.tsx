import React from 'react'
import BasicLayout from 'components/Common/BasicLayout'
import Analytics from 'components/Analytics/Analytics'

type Props = {}

export default function index({}: Props) {
  return (
    <div className='flex'>
      <BasicLayout title="Аналитика - Wyvern" address="164523, обл. Архангельская, г Северодвинск, пр-кт Ленина, д. 50, кв. 24" heading="Аналитика" subheading='Показания за месяц' children={<Analytics/>}/>
    </div>
  )
}