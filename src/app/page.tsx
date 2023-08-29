"use client"

import CreateForm from "./CreateForm"
import About from "./about"
import Footer from "./footer"
import Script from 'next/script'
import Head from 'next/head'

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen bg-gray-900">
      <Head>
        <title>The Password Generator</title>  
        <meta name="description" content="Free password generator online. Secure password generation all within your browser! This website runs locally and will only reach out to the internet for analytics purposes"/>
      </Head>
      <section className="content">
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-3xl mb-12">thepasswordgenerator.com</h1>
        </div>      
        <CreateForm/>
      </section>
      <About/>
      <Footer/>
    </main>
  )
}
