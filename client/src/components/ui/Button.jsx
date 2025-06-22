import {cn} from "@/lib/util";


export function Button({type="button", onClick, className, children, ...prop}) {
    return (
        <>
            <button
                type={type}
                className={cn("custom-btn", className)}
                onClick={onClick}
                {...prop}
            >
                {children}
            </button>
        </>)
}