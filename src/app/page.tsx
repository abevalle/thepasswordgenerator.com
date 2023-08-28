"use client"

import CreateForm from "./CreateForm"
import Footer from "./footer"
import Script from 'next/script'

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen bg-gray-900">
      <section className="content">
        <div className="flex items-center justify-center">
          <h1>thepasswordgenerator.com</h1>
        </div>      
        <CreateForm/>
      </section>
      <Footer/>
    </main>
  )
}
