interface CopyableProps {
    children?: React.ReactNode
}

export default function Copyable({ children }: CopyableProps) {
    return (
        <div className="overflow-x-auto bg-hover-dark whitespace-nowrap rounded-md scrollbar relative">
            <div className="px-3 w-full text-center">
                {children}
            </div>
        </div>
    );
}