import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input, InputProps } from "./input"


export const InputSearch = (props: InputProps) => {
    return (
        <div className="flex items-center justify-center relative bg-primary w-full rounded-md lg:w-2/3">
            <MagnifyingGlassIcon className="absolute left-3 top-5.5 w-4 h-4"/>
            <Input {...props} className="placeholder-white py-7 pl-8"/>
        </div>
    )
}