import React from 'react'
import Header from '../components/price/Header'
import PriceList from '../components/price/PriceList'
import PaymentStructure from '../components/price/PaymentStructure'
import CurrentOffer from '../components/price/CurrentOffer'
import Interested from '../components/common/Interested'
import Faq from '../components/common/Faq'
import LetsTalk from '../components/common/LetsTalk'
import Banks from '../components/price/Banks'

const Price = () => {
  return (
    <>

        <Header/>

        <PriceList/>

        <PaymentStructure/>

        <CurrentOffer/>

        <Interested/>

        <Banks/>

        <Interested/>

        <Faq/>

        <LetsTalk type="Price" />

    </>
  )
}

export default Price
