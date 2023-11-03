"use client"
import { ShowMoreButtonType } from "@/types"
import CustomButton from "./CustomButton"
import { useRouter } from "next/navigation"
import { updateParamsOfCustomFilters } from "@/utils"

const ShowMoreButton = ({ pageNumber, isNext }: ShowMoreButtonType) => {
    const router = useRouter()
    const handleShowMore = () => {
        const newLimit = (pageNumber + 1) * 10
        const newPathName = updateParamsOfCustomFilters('limit', `${newLimit}`)

        router.push(newPathName, {scroll: false})
    }
    return(
        <div className="w-full flex-center gap-5 mt-10">
            {
                 isNext 
                 ?
                 <CustomButton 
                     title="Show more"
                     containerStyles='w-full py-[16px] rounded-full bg-primary-blue text-white'
                     handleClick={handleShowMore}
                     />
                 :
                 <></>
            }
        </div>
    )
}

export default ShowMoreButton