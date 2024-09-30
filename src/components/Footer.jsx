import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
    <footer className="px-4 py-8 bg-stone-950 dark:text-yellow-500">
    <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
      <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-yellow-800">
         
        </div>
        <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
          <li>
            Terms of use
          </li>
          <Link to="/contact">
            Contact
          </Link>
        </ul>
      </div>
      <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
        <li>
          Instagram
        </li>
        <li>
         Facebook
        </li>
        <li>
          Linkedin
        </li>
      </ul>
    </div>
  </footer>
    </div>
  )
}

export default Footer