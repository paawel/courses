import React from 'react'
import { Button } from './ui/button'

const PetFormBtn = ({ actionType }: {
    actionType: "add" | "edit"
}) => {
    return (
        <Button
            type="submit"
            className="mt-5 self-end">
            {
                actionType === 'add' ? 'Add a new pet' : 'Edit pet'
            }
        </Button>
    )
}

export default PetFormBtn