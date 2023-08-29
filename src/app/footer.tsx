"use client"

export default function Footer() {

  return (
    <footer
      className="flex flex-col items-center text-center text-white footer"
      style={{"backgroundColor": "#0a4275", "marginTop": "auto"}}>
      <div
        className="w-full p-4 text-center bg-gray-800">
        <p>© 2023 Copyright:
        <a className="text-white" href="https://abevalle.com/"
          > AbeValle</a></p>
      </div>
    </footer>
  )
}
