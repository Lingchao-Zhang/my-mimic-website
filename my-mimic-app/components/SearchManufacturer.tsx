'use client'
import { searchManufacturerType } from "@/types"
import { Combobox, Transition } from "@headlessui/react"
import Image from "next/image"
import { Fragment, useState } from "react"
import { manufacturers } from "@/constants"

const SearchManufacturer = ({manufacturer, setManufacturer}: searchManufacturerType) => {
    const [query, setQuery] = useState('')
    const filteredManufacturer = query === "" 
    ? manufacturers
    : manufacturers.filter((item) => (
        item
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    ))
    return(
        <div className="search-manufacturer">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image 
                          src="/car-logo.svg"
                          width={20}
                          height={20}
                          className="ml-4"
                          alt="Car Logo"                      
                        />
                    </Combobox.Button>
                    <Combobox.Input 
                        className="search-manufacturer__input"
                        placeholder="Manufacturer"
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(event) => setQuery(event.target.value)}
                    />

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo = "opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options>
                            {
                                filteredManufacturer.map((item: string) => (
                                    <Combobox.Option
                                        key={item}
                                        value={item}
                                        className={( {active }) => `
                                        relative search-manufacturer__option
                                        ${active ? "bg-[#3344AA] text-white" : "text-gray-900"}`}>
                                        {({ selected }) => (                                          
                                             <span className={`block truncate ${
                                                selected ? 'font-bold' : 'font-normal'
                                             }`}>
                                                {item}
                                             </span>
                                        )}
                                    </Combobox.Option>
                                ))
                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer