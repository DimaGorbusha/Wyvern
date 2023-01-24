import React from 'react';
import Card from 'components/Common/Card';
import electricity from 'public/img/cards/electricity.png';
import ArticleCard from 'components/Common/ArticleCard';
import article1 from 'public/img/cards/article1.png';

type Props = {}

export default function Data({}: Props) {
  return (
    <div className='pr-[570px] pb-[185px]'>
        <div className='mb-[28px]'>
          <Card cardTitle='Электричество' cardDate='22.01.2022-22.02.2022' cardImg={electricity} cardButton="Дать показания"/>
        </div>
        <h2 className='heading4'>Статьи</h2>
        <div className='flex mt-[22px]'>
          <div>
            <ArticleCard href='https://pulsarm.ru/stati/kak-snyat-pokazaniya-schetchika-elektroenergii/' cardImg={article1} articleHeading='Как снять показания счётчиков?'/>
          </div>
        </div>
    </div>
  )
}