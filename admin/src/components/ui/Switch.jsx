import {Input} from "@/components/ui/Input";
import {cn} from "@/lib/util";

const Switch = ({name, className}) => {
    return (
        <>
            <label className={cn("inline-flex items-center cursor-pointer w-fit", className)}>
                <Input type="checkbox" name={name} className="sr-only peer"/>
                <div className="relative w-16 h-8 bg-gray-200 rounded-full after:content-['']
                after:absolute after:top-0.5 after:start-[4px] after:bg-white after:rounded-full
                after:h-7 after:w-7 after:transition-all
                peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-full peer-checked:bg-blue-600"/>
            </label>
        </>
    )
}

export default Switch;