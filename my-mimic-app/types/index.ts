import { MouseEventHandler } from "react";

export interface CustomButtonType{
    title: string,
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
    textStyles?: string,
    icon?: string
}

export interface searchManufacturerType{
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void
}

export interface CarType{
    city_mpg:number
    class:string
    combination_mpg:number
    cylinders:number
    displacement:number
    drive:string
    fuel_type:string
    highway_mpg:number
    make:string
    model:string
    transmission:string
    year:number
}

export interface CarsType{
    car: CarType
}

export interface CarsDetailsType{
    isOpen: boolean,
    closeModal: () => void,
    car: CarType
}

export interface FiltersType{
    manufacturer: string,
    model: string,
    fuel: string,
    year: number,
    limit: number
}
