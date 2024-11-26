import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'
import BackgroundPattern from '@/components/background-pattern'
import PetContextProvider from '@/contexts/pet-context-provider'
import SearchContextProvider from '@/contexts/search-context-provider'
import React from 'react'
import prisma from "@/lib/db";
import { Toaster } from '@/components/ui/sonner'

const Layout = async ({ children }: {
    children: React.ReactNode
}) => {
    const pets = await prisma.pet.findMany();

    return (
        <>
            <BackgroundPattern />

            <div className='
                flex
                flex-col
                max-w-[1050px] 
                px-4
                mx-auto
                min-h-screen
            '>
                <AppHeader />
                <SearchContextProvider>
                    <PetContextProvider data={pets}>
                        {children}
                    </PetContextProvider>
                </SearchContextProvider>
                <AppFooter />
            </div>

            <Toaster position='top-right'/>
        </>
    )
}

export default Layout