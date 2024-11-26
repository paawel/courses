type H1Props = {
    children: React.ReactNode;
    className?: string;
}

const H1 = ({ children, className }: H1Props) => {
    return (
        <h1 className={`
                font-medium 
                text-2xl 
                leading-6 
                ${className}
            `}>
            {children}
        </h1>
    )
}

export default H1