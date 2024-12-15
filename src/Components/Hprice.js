import React from 'react'
import Title from './Common/title/Title'
import PriceCard from './Pricing/PriceCard'

const Hprice = () => {
  return (
    <>
    <section className="hprice padding">
    <Title subtitle={'our pricing'} title={'pricing & pacakges'} />
        <div className="price container grid">
            <PriceCard />
            
            </div>
      </section>
      
    </>
  )
}

export default Hprice
