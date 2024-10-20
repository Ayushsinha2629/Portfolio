import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'>
            Contact 
            <span className='text-slate-400'> Me</span>
        </h1>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>
                {CONTACT.address}
            </p>
            <p>
                {CONTACT.phoneNo}
            </p>
            <a href="#" className='border-b'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact