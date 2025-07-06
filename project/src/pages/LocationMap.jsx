import React from 'react'
import Header from '../components/locationMap/Header'
import Interested from '../components/common/Interested'
import Faq from '../components/common/Faq'
import LetsTalk from '../components/common/LetsTalk'
import WhyPinnacle from '../components/locationMap/WhyPinnacle'
import NearByPinnacle from '../components/locationMap/NearByPinnacle'
import LocationMapBody from '../components/locationMap/LocationMapBody'

function LocationMap() {
  return (
    <>

        <Header/>

        <WhyPinnacle/>

        <NearByPinnacle/>

        <LocationMapBody/>

        <Interested/>

        <Faq/>

        <LetsTalk type="Location Map"/>

    </>
  )
}

export default LocationMap
