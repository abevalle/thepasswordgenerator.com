"use client"

import CreateForm from "./CreateForm"
import Footer from "./footer"

export default function Home() {

  return (
    <main className="min-w-screen min-h-screen bg-gray-900 items-center justify-center">
      <section className="content">
        <div className="flex items-center justify-center">
          <h1>thepasswordgenerator.com</h1>
        </div>      
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4HNF0DRJMG"></script>
        <CreateForm/>
      </section>
      <Footer/>
    </main>
  )
}
