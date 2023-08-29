"use client"

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

export default function About() {

  return (
    <section className="flex-row items-center text-center text-white mt-5">
      <a href="https://github.com/abevalle/thepasswordgenerator.com"><FontAwesomeIcon icon={faGithub} /> Github</a>
    </section>
  )
}
