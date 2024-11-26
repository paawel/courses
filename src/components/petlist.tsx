'use client';

import { usePetContext, useSearchContext } from '@/lib/hooks';
import Image from 'next/image'

const PetList = () => {
    const { pets, selectedPetId, handleChangeSelectedPetId } = usePetContext();
    const { searchQuery } = useSearchContext();

    const filteredPets = pets.filter(pet => pet.name.toLowerCase().includes(searchQuery));

    return (
        <ul className='
        bg-white 
        border-b
        border-light
    '>
            {
                filteredPets.map(pet => (
                    <li key={pet.id}>
                        <button
                            onClick={() => handleChangeSelectedPetId(pet.id)}
                            className={`
                                flex 
                                h-[70px]
                                w-full
                                cursor-pointer
                                items-center
                                px-5
                                text-base
                                gap-3
                                transition
                                focus:bg-[#EFF1F2]
                                hover:bg-[#EFF1F2]
                                ${selectedPetId === pet.id ? 'bg-[#EFF1F2]' : ''}
                            `}>
                            <Image
                                className='
                                    rounded-full
                                    object-cover
                                    w-[45px]
                                    h-[45px]
                                '
                                alt='pi'
                                width={45}
                                height={45}
                                src={pet.imageUrl} />
                            <p className='font-semibold'>
                                {
                                    pet.name
                                }
                            </p>
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}

export default PetList