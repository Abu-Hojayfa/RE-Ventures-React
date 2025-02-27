import React from 'react'
import Header from './header/Header'
import FrdProperties from './FrdProperties'
import WhatweDo from './WhatweDo'
import OurAgents from '../aboutus/OurAgents'
import BlogCard from './BlogCard'
import CommentCarousel from './CommentCarousel'
import TrustedByCompanies from './TrustedByCompanies'

export default function Home() {
  return (
    <div>
      <Header />
      <FrdProperties />
      <WhatweDo />
      <div className='py-16 bg-[#F3F7FD]'>
        <CommentCarousel />
      </div>
      <OurAgents />
      <TrustedByCompanies />
      <BlogCard />
    </div>
  )
}
