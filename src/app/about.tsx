"use client"

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faClockRotateLeft, faFileZipper, faCalendarAlt, faVideo } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    <section className="flex-row items-center text-center text-white mt-5">
      <a href="https://github.com/abevalle/thepasswordgenerator.com"><FontAwesomeIcon icon={faGithub} /> Github</a><span> | </span>
      <a href="https://reversegif.com/"><FontAwesomeIcon icon={faClockRotateLeft}/> Reversegif.com</a><span> | </span>
      <a href="https://zipmyfile.com/"><FontAwesomeIcon icon={faFileZipper}/> ZipMyFile.com</a><span> | </span>
      <a href="https://schedulr.org/"><FontAwesomeIcon icon={faCalendarAlt}/> Schedulr.org</a><span> | </span>
      <a href="https://meetingsession.com/"><FontAwesomeIcon icon={faVideo}/> MeetingSession.com</a>
    </section>
  )
}
