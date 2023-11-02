'use client'

import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"
import Image from "next/image"
import { useRouter } from "next/navigation"

const SearchButton = () => (
    <button type="submit">
        <Image 
          src="/magnifying-glass.svg"
          alt="search icon"
          height={40}
          width={40}/> 
    </button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const router = useRouter()
    const updateParams = (manufacturer:string ,model: string) => {
        // get current search parameters
        const searchParams = new URLSearchParams(window.location.search)
        // if user type in manufacturer search, then add to manufacuturer,
        // else delete the privous manufacturer
        if(manufacturer){
          searchParams.set('manufacturer', manufacturer)
        } else{
          searchParams.delete('manufacturer')
        }
      
        if(model){
          searchParams.set('model', model)
        } else{
          searchParams.delete('model')
        }

        //generate new path name by adding search parameters behind current location
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`
        
        // use router to redirect
        router.push(newPathname)
      }

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        // prevent the page refresh
        event.preventDefault()

        if(manufacturer === "" && model === ""){
            alert("Please fill the search bar!")
        } else{
            updateParams(manufacturer.toLowerCase(), model.toLowerCase())
        }
    }

    return(
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer 
                 manufacturer={manufacturer}
                 setManufacturer = {setManufacturer}
                />
            </div>
            <div className="searchbar__item">
                <Image 
                    className="absolute w-[20px] h-[20px] ml-4"
                    src="/model-icon.png"
                    alt="model icon"
                    height={25}
                    width={25}/> 
                <input 
                 className="searchbar__input"
                 name="model"
                 value={model}
                 onChange={(event) => setModel(event.target.value)}
                 />
            </div>
            <SearchButton />
        </form>
    )
}

export default SearchBar