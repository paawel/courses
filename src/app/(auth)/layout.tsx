import Logo from '@/components/logo'
import React from 'react'

const Layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className='
            flex 
            justify-center 
            items-center
            min-h-screen
            flex-col
            gap-y-5
        '>
            <Logo />
            {children}
        </div>
    )
}

export default Layout