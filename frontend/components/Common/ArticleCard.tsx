import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type Props = {
    href: string,
    cardImg: StaticImageData,
    articleHeading: string,
}

export default function ArticleCard({href, cardImg, articleHeading}: Props) {
  return (
    <div>
        <Link href={href}>
            <Image src={cardImg} alt='' className='rounded-[20px] h-[251px] w-[244px]'/>
            <p className='text1 mt-[16px]'>{articleHeading}</p>
        </Link>
    </div>
  )
}