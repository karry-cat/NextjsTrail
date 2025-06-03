import {cn} from "@/lib/util";


export function Input({type, className, ...props}) {
    return (
        <div>
            <div>
                <input
                    type={type}
                    className={cn("custom-input", className)}
                    {...props}
                />
            </div>
        </div>)
}