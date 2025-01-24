import React from 'react'
import Header from './header/Header'
import FrdProperties from './FrdProperties'
import WhatweDo from './WhatweDo'
import OurAgents from '../aboutus/OurAgents'
import BlogCard from './BlogCard'
import CommentCarousel from './CommentCarousel'

export default function Home() {
  return (
    <div>
      <Header />
      <FrdProperties />
      <WhatweDo />
      <CommentCarousel />
      <OurAgents />
      <BlogCard />
    </div>
  )
}
