'use client';
import { addPet, deletePet, editPet } from "@/actions/actions";
import { PetEssentials } from "@/lib/types";
import { Pet } from "@prisma/client";
import { createContext, useOptimistic, useState } from "react";
import { toast } from "sonner";

type TPetContext = {
    pets: Array<Pet>;
    selectedPetId: Pet['id'] | null;
    selectedPet: Pet | undefined;
    numberOfPets: number;
    handleAddPet: (pet: PetEssentials) => Promise<void>;
    handleEditPet: (id: Pet['id'], pet: PetEssentials) => void;
    handleCheckoutPet: (id: Pet['id']) => Promise<void>;
    handleChangeSelectedPetId: (id: Pet['id']) => void;
}

export const PetContext = createContext<TPetContext | null>(null);

const PetContextProvider = ({ data, children }: {
    children: React.ReactNode,
    data: Array<Pet>
}) => {
    const [optimisticPets, setOptimisticPets] = useOptimistic(data,
        (state, { action, payload }) => {
            switch (action) {
                case "add":
                    return [...state, {
                        ...payload,
                        id: Math.random().toString()
                    }];
                case "edit":
                    return state.map(pet => {
                        if (pet.id === payload.id) {
                            return { ...pet, ...payload.newPetData }
                        }

                        return pet;
                    })
                case 'delete':
                    return state.filter(pet => pet.id !== payload);
                default:
                    return state;
            }
        });
    const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

    const selectedPet = optimisticPets.find(pet => pet.id === selectedPetId);
    const numberOfPets = optimisticPets.length;

    const handleAddPet = async (newPet: PetEssentials) => {
        setOptimisticPets({ action: 'add', payload: newPet });
        const error = await addPet(newPet);

        if (error) {
            toast.warning(error.message);
            return;
        }
    }

    const handleEditPet = async (petId: Pet['id'], newPetData: PetEssentials) => {
        setOptimisticPets({
            action: 'edit', payload: {
                id: petId,
                newPetData
            }
        });
        const error = await editPet(petId, newPetData);

        if (error) {
            toast.warning(error.message);
            return;
        }
    }

    const handleCheckoutPet = async (petId: Pet['id']) => {
        setOptimisticPets({
            action: 'delete', payload: petId
        });

        const error = await deletePet(petId);

        if (error) {
            toast.warning(error.message);
            return;
        }
        setSelectedPetId(null);
    }

    const handleChangeSelectedPetId = (id: Pet['id']) => {
        setSelectedPetId(id);
    }

    return (
        <PetContext.Provider value={
            {
                pets: optimisticPets,
                selectedPetId,
                selectedPet,
                numberOfPets,
                handleCheckoutPet,
                handleAddPet,
                handleEditPet,
                handleChangeSelectedPetId
            }
        }>
            {children}
        </PetContext.Provider>
    )
}

export default PetContextProvider