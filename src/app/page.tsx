"use client"

import CreateForm from "./CreateForm"
import About from "./about"
import Footer from "./footer"
import Script from 'next/script'
import Head from 'next/head'

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen">
      <div className="mesh-gradient"></div>
      <Head>
        <title>The Password Generator</title>  
        <meta name="description" content="Free password generator online. Secure password generation all within your browser! This website runs locally and will only reach out to the internet for analytics purposes"/>
      </Head>
      <section className="content">
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-16 px-4 sm:px-0">
          <h1 className="site-title text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-center">
            Password Generator
          </h1>
          <p className="text-gray-400 text-center max-w-2xl text-base sm:text-lg px-4">
            Generate cryptographically secure passwords in your browser. 
            <span className="text-purple-400">No strings attached.</span>
          </p>
        </div>      
        <CreateForm/>
      </section>
      <About/>
      <Footer/>
    </main>
  )
}
