import { MouseEventHandler } from "react";

export interface CustomButtonType{
    title: string,
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
}