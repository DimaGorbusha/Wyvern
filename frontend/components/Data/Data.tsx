import React from 'react';
import Card from 'components/Common/Card';
import electricity from 'public/img/cards/electricity.png';

type Props = {}

export default function Data({}: Props) {
  return (
    <div>
        <Card cardTitle='Электричество' cardDate='22.00-27.9999' cardImg={electricity} cardButton="[eq"/>
    </div>
  )
}