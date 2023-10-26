
import { CustomButtonType } from "@/types"

const CustomButton = ({title, containerStyles, handleClick}: CustomButtonType) => {
    return(
        <button className={`custom-btn ${containerStyles}`} onClick={handleClick}>
            <span className="flex-1">{title}</span>
        </button>
    )
}

export default CustomButton