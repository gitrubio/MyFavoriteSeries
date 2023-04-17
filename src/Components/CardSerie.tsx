import React from 'react'
import { Card } from 'antd';
import { IProsCard } from '../interfaces';

export default function CardSerie({title,characters,description,imgFont,mainCharacterImg,showDrawer} : IProsCard) {
  return (
    <Card onClick={()=>showDrawer({title,characters,description,imgFont,mainCharacterImg})} title={title} hoverable style={{ width: 350}}>
    <article>
      <img src={imgFont} />
      <img src={mainCharacterImg} />
    </article>
  </Card>
  )
}
