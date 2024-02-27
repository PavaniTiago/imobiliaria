import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input, InputProps } from "./input"


export const InputSearch = (props: InputProps) => {
    return (
        <div className="flex relative w-2/3">
            <MagnifyingGlassIcon className="absolute left-3 top-4 w-4 h-4"/>
            <Input {...props} className="placeholder-white py-6 pl-8"/>
        </div>
    )
}