"use server";

import prisma from "@/lib/db";
import { sleep } from "@/lib/utils";
import { petFormSchema, petIdSchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";

export async function addPet(pet: unknown) {
    await sleep(1000);

    const validatedPet = petFormSchema.safeParse(pet);
    if (!validatedPet.success) {
        return {
            message: "Invalid pet data"
        }
    }

    try {
        await prisma.pet.create({
            data: validatedPet.data
        });
    } catch (err) {
        return {
            message: 'Err1'
        }
    }

    revalidatePath('/app', 'layout');
}

export async function editPet(petId: unknown, newPetData: unknown) {
    await sleep(1000);

    const validatedPetId = petIdSchema.safeParse(petId);

    const validatedPet = petFormSchema.safeParse(newPetData);

    if (!validatedPetId.success || !validatedPet.success) {
        return {
            message: "Invalid pet data"
        }
    }

    try {
        await prisma.pet.update({
            where: {
                id: validatedPetId.data
            },
            data: validatedPet.data
        });
    } catch (err) {
        return {
            message: 'Err2'
        }
    }

    revalidatePath('/app', 'layout');
}

export async function deletePet(petId: unknown) {
    await sleep(1000);
    const validatedPetId = petIdSchema.safeParse(petId);
    
    if (!validatedPetId.success) {
        return {
            message: "Invalid pet data"
        }
    }

    try {
        await prisma.pet.delete({
            where: {
                id: validatedPetId.data
            }
        });
    } catch (err) {
        return {
            message: 'Err3'
        }
    }

    revalidatePath('/app', 'layout');
}
