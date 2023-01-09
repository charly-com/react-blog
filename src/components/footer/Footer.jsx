import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

const footer = () => {
  return (
    <>
    <footer className='boxItems'>
        <div className='container flex'>
            <p>Charles Chijuka - All right reserved - Design & Developed by CharlieDotCom, Inc</p>
            <div className='socail'>
            <BsFacebook className='icon' />
            <RiInstagramFill className='icon' />
            <AiFillTwitterCircle className='icon' />
            <AiFillLinkedin className='icon' />
            </div>
        </div>
    </footer>
    </>
  )
}

export default footer