import React, { useState } from 'react'
import axios from 'axios';
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import left_bg from 'public/img/sign-in/left-bg.png'
import logo from 'public/logo.svg'
import config from 'config.js'

type Props = {}

export default function index({}: Props) {
  const [login, setLogIn] = useState(() => {
    return {
        phone: "",
        password: "",
    }
  })

  interface Result{
    id: number;
    name: string;
    address: string;
    avatar: string;
    registered: boolean;
  }

  const changeInputSignIn = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist()
    setLogIn(prev => {
        return {
            ...prev,
            [event.target.name]: event.target.value,
        }
    })}

  const submitCheckIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post(config.DOMAIN_SERVER + "/sig-in/", {
      number: login.phone,     
      password: login.password,
    }).then((res: Result) => {
      if (res.registered === true) {
        window.location.href = config.DOMAIN_SITE + "/main"
      } else {
        alert("There is already a user with this email")
      }
      }).catch(() => {
        alert("An error occurred on the server")
      })
    }

  return (
    <div className='flex bg-bg'>
      <Head>
        <title>Вход - Wyvern</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Image className='w-[549px] h-[822px]'
        src={left_bg}
        alt=""

      />
      <div className='flex flex-col ml-[231px] mt-[182px] '>
        <Image className='mb-[15px]' src={logo} alt='' />
        <h1 className='heading1 mb-1'>Вход</h1>
        <p className='text2 text-gray mb-5'>честный и точный учёт, экономь, доверяй,<br/>узнавай вместе с нами✌️ </p>
        <form onSubmit={submitCheckIn} className='flex flex-col'>
          <p className='text4 mb-1'>Телефон</p>
          <input
            id="phone"
            type="tel"
            required
            value={login.phone}
            onChange={changeInputSignIn}
            placeholder="Ваш номер телефона"
            className='py-5 pl-5 pr-72 rounded-2xl mb-4'
          />
          <p className='text4 mb-1'>Пароль</p>
          <input 
            type="password"
            id="password"
            name="password"
            required
            value={login.password}
            onChange={changeInputSignIn}
            placeholder="Ваш пароль"
            className='py-5 pl-5 pr-72 rounded-2xl mb-[20px]'
          />
          <input type="submit" value="Войти в аккаунт" className='text-white bg-main rounded-2xl btn1 py-[20px] px-[75px] cursor-pointer hover:bg-hov  transition easy delay-[30]'/>
         </form>
         <p className='text1 text-gray mt-5 ml-24'>Нет аккаунта? <Link href='/sign-up' className='tag1 text-[18px] text-main cursor-pointer hover:text-hov'>Зарегистрируйтесь</Link></p>
      </div>
    </div>
  )
}