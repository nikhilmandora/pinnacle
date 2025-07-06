import React from 'react'
import Header from '../components/amenities/Header'
import Interested from '../components/common/Interested'
import Faq from '../components/common/Faq'
import LetsTalk from '../components/common/LetsTalk'
import Album from '../components/amenities/Album'

const Amenities = () => {
  return (
    <>

      <Header/>

      <Album/>

      <Interested/>

      <Faq/>

      <LetsTalk type="Amenities" />
      
    </>
  )
}

export default Amenities
