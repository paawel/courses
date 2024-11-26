type ContentBlockProps = {
    children: React.ReactNode;
    className?: string;
}

const ContentBlock = ({ children, className }: ContentBlockProps) => {
    return (
        <div className={`
            shadow-sm
            rounded-md
            overflow-hidden
            w-full
            h-full
            bg-[#F7F8FA]
            ${className}
        `}>
            {children}
        </div>
    )
}

export default ContentBlock