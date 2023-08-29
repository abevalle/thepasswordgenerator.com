"use client"

import CreateForm from "./CreateForm"
import About from "./about"
import Footer from "./footer"
import Script from 'next/script'

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen bg-gray-900">
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
