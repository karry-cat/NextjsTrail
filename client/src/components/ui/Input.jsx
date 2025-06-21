import {cn} from "@/lib/util";


export function Input({type, className, ...props}) {
    return (
        <input
            type={type}
            className={cn("custom-input", className)}
            {...props}
        />
    )
}