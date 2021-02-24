import React from 'react'
import Head from 'next/head'
import { LoginComponent } from '../components/login'

export function Home(){
  return (
    <div>
      <Head>
        <title>Wiser Educação - Login</title>
      </Head>
      <main>
        <LoginComponent></LoginComponent>
      </main>
    </div>
  )
}

export default Home