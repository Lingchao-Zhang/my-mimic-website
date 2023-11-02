import { CarsDetailsType } from "@/types"
import { Dialog, Transition } from "@headlessui/react"
import Image from "next/image"
import { Fragment } from "react"

const CarDetails = ({isOpen, closeModal, car}: CarsDetailsType) => {
    return(
        <>
         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
             <Transition.Child 
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25"/>
             </Transition.Child>
             <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0 scale-95"
                     enterTo="opacity-100 scale-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 scale-100"
                     leaveTo="opacity-0 scale-95"
                     >
                        <Dialog.Panel className="car-details__dialog-panel">
                            <button onClick={closeModal} className="car-details__close-btn">
                                <Image 
                                 className="object-contain"
                                 src="/close.svg"
                                 alt="close"
                                 width={20}
                                 height={20}
                                 />
                            </button>
                            <div className="flex-1 flex flex-col gap-3">
                                <div className="car-details__main-image">
                                    <Image                                     
                                     className="object-contain"
                                     src="/hero.png"
                                     alt="Car Image"
                                     fill priority/>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                        <Image                                     
                                        className="object-contain"
                                        src="/hero.png"
                                        alt="Car Image"
                                        fill priority/>
                                    </div>
                                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                        <Image                                     
                                        className="object-contain"
                                        src="/hero.png"
                                        alt="Car Image"
                                        fill priority/>
                                    </div>
                                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                        <Image                                     
                                        className="object-contain"
                                        src="/hero.png"
                                        alt="Car Image"
                                        fill priority/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <h2 className="font-semibold text-xl capitalize">{car.make} {car.model}</h2> 
                                <div className="mt-3 flex flex-wrap gap-4">
                                    {Object.entries(car).map(([key, value]) => 
                                        <div key={key}className="flex justify-between gap-5 w-full text-right">
                                            <span className="text-violet-400 capitalize">{key.split("_").join(" ")}</span>
                                            <span className="font-semibold text-black-100">{value}</span>
                                        </div>
                                    )}
                                </div>                               
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
             </div>
            </Dialog>
         </Transition>
        </>
    )
}

export default CarDetails