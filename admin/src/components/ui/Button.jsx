import {cn} from "@/lib/util";


export function Button({className, onClick, children, ...props}) {
    return (
        <div>
            <button
                className={cn("custom-submit-btn", className)}
                onClick={onClick}>
                {children}
            </button>
        </div>)
}