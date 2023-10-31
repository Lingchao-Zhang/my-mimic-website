import { MouseEventHandler } from "react";

export interface CustomButtonType{
    title: string,
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface searchManufacturerType{
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void
}