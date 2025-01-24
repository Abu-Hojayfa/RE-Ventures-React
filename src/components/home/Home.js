import React from 'react'
import Header from './header/Header'
import FrdProperties from './FrdProperties'
import WhatweDo from './WhatweDo'
import OurAgents from '../aboutus/OurAgents'
import BlogCard from './BlogCard'

export default function Home() {
  return (
    <div>
      <Header />
      <FrdProperties />
      <WhatweDo />
      <OurAgents />
      <BlogCard />
    </div>
  )
}
