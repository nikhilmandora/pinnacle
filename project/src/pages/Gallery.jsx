import React from 'react'
import Header from '../components/gallery/Header'
import Interested from '../components/common/Interested'
import Faq from '../components/common/Faq'
import LetsTalk from '../components/common/LetsTalk'
import GalleryBody from '../components/gallery/GalleryBody'

const Gallery = () => {
  return (
    <>

        <Header/>

        <GalleryBody/>

        <Interested/>

        <Faq/>

        <LetsTalk type="Gallery" />
    </>
  )
}

export default Gallery
