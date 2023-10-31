"use client"
import { CustomButtonType } from "@/types"
import Image from "next/image"

const CustomButton = ({title, containerStyles, handleClick, textStyles, icon}: CustomButtonType) => {
    return(
        <button className={`custom-btn ${containerStyles}`} onClick={handleClick}>
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {
                icon 
                ?
                <div className="relative w-6 h-6">
                    <Image 
                     src={icon}
                     alt="right icon" 
                     className="object-contain"
                     fill/>
                </div>
                :
                <></>
            }
        </button>
    )
}

export default CustomButton