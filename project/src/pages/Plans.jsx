import React from 'react'
import Header from '../components/plans/Header'
import Interested from '../components/common/Interested'
import Faq from '../components/common/Faq'
import LetsTalk from '../components/common/LetsTalk'
import PlansBody from '../components/plans/PlansBody'
import Experience from '../components/plans/Experience'
import SitePlan from '../components/plans/SitePlan'
import TowerPlans from '../components/plans/TowerPlans'

const Plans = () => {
  return (
    <>
      
        <Header/>

        <PlansBody/>

        <Experience/>

        <SitePlan/>

        <TowerPlans/>

        <Interested/>

        <Faq/>

        <LetsTalk type="Plans" />

    </>
  )
}

export default Plans
