import { FaLinkedin, FaGithub} from "react-icons/fa"
import { FaSquareXTwitter} from "react-icons/fa6"
import logo from "../assets/kevinRushLogo.png"
import React from 'react'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img width={70} height={70} src={logo} alt="logo" />
        </div>
        <div className="flex m-8 items-center justify-center gap-4 text-2xl">
            <FaLinkedin color="white"/>
            <FaGithub color="white"/>
            <FaSquareXTwitter color="white" style={{cursor:"pointer"}}/>
        </div>

    </nav>
  )
}

export default Navbar