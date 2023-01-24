import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import left_bg from 'public/img/sign-in/left-bg.png'
import logo from 'public/logo.svg'
import config from 'config.js'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

interface loginInitialValues {
  phone: string;
  password: string;
}

interface Result{
  id: number;
  name: string;
  address: string;
  avatar: string;
  registered: boolean;
}

export default function index() {
  const initialValues: loginInitialValues = { phone: '', password: '' };
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
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
        <p className='text2 text-gray mb-5'>честный и точный учёт, экономь, доверяй,<br/>узнавай вместе с нами✌️</p>

        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            phone: Yup.string().required('Required'),
            password: Yup.string().required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >

          <Form className='flex flex-col'>
            <p className='text4 mb-1'>Телефон</p>
            <Field name="phone" type="tel" placeholder='Ваш номер телефона' className='py-5 pl-5 pr-72 rounded-2xl mb-4'/>
            <ErrorMessage name="phone" />

            <p className='text4 mb-1'>Пароль</p>
            <Field name="password" type="password" placeholder='Ваш пароль' className='py-5 pl-5 pr-72 rounded-2xl mb-[20px]'/>
            <ErrorMessage name="password" />
  
            <input type="submit" value="Войти в аккаунт" className='text-white bg-main rounded-2xl btn1 py-[20px] px-[75px] cursor-pointer hover:bg-hov  transition easy delay-[30]'/>
          </Form>
        </Formik>

        <p className='text1 text-gray mt-5 ml-24'>Нет аккаунта? <Link href='/sign-up' className='tag1 text-[18px] text-main cursor-pointer hover:text-hov'>Зарегистрируйтесь</Link></p>
      </div>
    </div>
  )
}