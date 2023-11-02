'use client'
import { CarsType } from "@/types"
import { calculateCarRent } from "@/utils"
import Image from "next/image"
import CustomButton from "./CustomButton"
import { useState } from "react"
import CarDetails from "./CarDetails"

const CarCard = ({car}: CarsType) => {
    const {city_mpg, make, model, transmission, drive, year} = car
    const carRent = calculateCarRent(city_mpg, year)
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>
            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">
                $
                </span>
                {carRent}
                <span className="self-end text-[14px] font-medium">
                /day
                </span>
            </p>
            <div className="relative w-full h-40 my-3 object-obtain">
                <Image 
                  src="/hero.png"
                  alt="Car modal"
                  className="object-contain"
                  fill priority />
            </div>
            <div className="relative flex w-full mt-2">
                <div className="car-card__icon-container">
                    <div className="car-card__icon">
                        <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                        <p className='car-card__icon-text'>
                        {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                    <div className="car-card__icon">
                        <Image src="/tire.svg" width={20} height={20} alt="seat" />
                        <p className="car-card__icon-text">{drive.toUpperCase()}</p>
                    </div>
                    <div className="car-card__icon">
                        <Image src="/gas.svg" width={20} height={20} alt="seat" />
                        <p className="car-card__icon-text">{city_mpg} MPG</p>
                    </div>
                </div>
                <div className="car-card__btn-container">
                    <CustomButton
                        title='View More'
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        icon='/right-arrow.svg'
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
                <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car}/>
            </div>
        </div>
    )
}

export default CarCard