import { FaLinkedin, FaGithub,} from "react-icons/fa"
import { FaSquareXTwitter} from "react-icons/fa6"
import { SiReactiveresume } from "react-icons/si";
import React from 'react'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <svg className="pt-8" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="40" font-size="40" font-family="Arial" fill="white">AS</text>
          </svg>
        </div>
        <div className="flex m-8 items-center justify-center gap-4 text-2xl">
        <a href="https://drive.google.com/file/d/1DDJ1W6o-kzpGvSsZlhVu1VfWtXoZYeUw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <SiReactiveresume className="hover:text-blue-900 cursor-pointer" />
        </a>
        <a href="http://linkedin.com/in/ayush-sinha-965112300" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-900 cursor-pointer" />
        </a>
        <a href="https://github.com/Ayushsinha2629/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-blue-900 cursor-pointer" />
        </a>
        <a href="https://x.com/Ayushzaftor" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="hover:text-blue-900 cursor-pointer" />
        </a>
        </div>

    </nav>
  )
}

export default Navbar