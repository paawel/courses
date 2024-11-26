'use client';

import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import PetForm from "./pet-form";
import { useState } from "react";
import { flushSync } from "react-dom";

type TPetBtnProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    actionType: 'add' | 'edit' | 'checkout';
    disabled?: boolean;
};

const PetButton = ({ children, actionType, onClick, disabled }: TPetBtnProps) => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    if (actionType === 'checkout') {
        return (
            <Button
                variant="secondary"
                disabled={disabled}
                onClick={onClick}>
                {children}
            </Button>
        )
    } else {
        return (
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                <DialogTrigger asChild>
                    {
                        actionType === 'add' ? (
                            <Button size="icon">
                                <PlusIcon className="h-6 w-6" />
                            </Button>
                        ) : (
                            <Button variant="secondary">
                                {children}
                            </Button>
                        )
                    }
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {
                                actionType === 'add' ? 'Add a new pet' : 'Edit pet'
                            }
                        </DialogTitle>
                    </DialogHeader>

                    <PetForm actionType={actionType}
                        onFormSubmission={
                            () => {
                                flushSync(() => {
                                    setIsFormOpen(false)
                                });
                            }
                        } />
                </DialogContent>
            </Dialog>
        )
    }
}

export default PetButton