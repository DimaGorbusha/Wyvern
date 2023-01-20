import React from 'react'
import BasicLayout from 'components/Common/BasicLayout'
import Data from 'components/Data/Data'

export default function index({}) {
  return (
    <div className='flex'>
      <BasicLayout title="Показания - Wyvern" address="164523, обл. Архангельская, г Северодвинск, пр-кт Ленина, д. 50, кв. 24" heading="Показания" subheading='Показания за месяц' children={<Data/>}/>
    </div>
  )
}