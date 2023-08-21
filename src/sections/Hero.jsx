import React from 'react'
import Button from '../components/button'
import { arrowRight } from '../assets/icons'
import {shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import Shoecard from '../components/Shoecard'


const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col  justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col  justify-center items-start w-full max-xl:padding-x pt-28 ">
        <p className="text-xl font-montserrat text-coral-red"> Our Summer collection</p>
        <h1 className="mt-10 font-palanquin  text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap realtive z-50 pr-10">
            The new Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">
            Nike
          </span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
          Discover stylish Nike arrivals,quality comfort , and innovation for your active life.
        </p>
        <Button 
        label="Show now" 
        iconURL={arrowRight}
        
        /> 
        <div className=" flex justify-start items-start w-full mt-20 gap-16 flex-wrap ">
            {statistics.map((stat) =>(
              <div>
                <p className="text-4xl font-palanquin font-bold " >{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray" >{stat.label}</p>
              </div>
            ))}
        </div>

      </div>
      <div className=" relative flex-1 flex justify-center z-0  items-center xl:min-h-screen max-xl:py40 bg-hero bg-primary bg-cover bg-center  ">
        <img 
          src={bigShoe1}
          alt='Shoes '
          width={610}
          height={500}
          className=" object-contain relative z-10"
        />
        {/* <div>
            {shoes.map((shoe)=>(
              <div key={shoe}>
                  <Shoecard 
                    imgURL={shoe}
                    changeBigShoeImage={()=>{}}
                  />
              </div>
            ))}
        </div> */}
      </div>

    </section>
  )
}

export default Hero