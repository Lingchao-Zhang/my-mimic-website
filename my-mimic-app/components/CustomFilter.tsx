"use client"

import { CustomFilterType, OptionType } from "@/types"
import { updateParamsOfCustomFilters } from "@/utils"
import { Listbox, Transition } from "@headlessui/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, Fragment } from "react"

const CustomFilter = ({ title, options }: CustomFilterType) => {
    const [selectedValue, setSelectedValue] = useState(options[0])
    const router = useRouter()
    const handleCustomeFilters = (event: OptionType) => {
        const newPathName = updateParamsOfCustomFilters(title, event.value.toLowerCase())
        router.push(newPathName, {scroll: false})
    }
    return(
        <div className="w-fit">
            <Listbox value={selectedValue} onChange={(event) => {
                setSelectedValue(event)
                handleCustomeFilters(event)
            }}>
                <div className="relative w-fit z-10">
                    <Listbox.Button className="custom-filter__btn">
                        <span className="block truncate">{selectedValue.title}</span>
                        <Image 
                         src="/chevron-up-down.svg"
                         alt="chevron-up-down-icon"
                         className="ml-4 object-contain"
                         height={20}
                         width={20}/>
                    </Listbox.Button>
                    <Transition
                     as={Fragment}
                     leave="transition ease-in duration-100"
                     leaveFrom="opacity-100"
                     leaveTo = "opacity-0"
                     >
                        <Listbox.Options className="custom-filter__options">
                            {
                                options.map((option) => (
                                    <Listbox.Option
                                     key={option.title}
                                     value={option}
                                     className={( {active }) => `
                                        relative search-manufacturer__option
                                        ${active ? "bg-[#3344AA] text-white" : "text-gray-900"}`}>
                                    {
                                        ({ selected }) => (
                                            <span className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}>
                                                {option.value}
                                            </span>
                                        )
                                    }
                                    </Listbox.Option>
                                ))
                            }
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default CustomFilter