import Image from "next/image";
import carlos from "../../../public/carlos2.png";
 
export function Photo(){
    return (
        <div className="relative w-[12rem] h-[12rem] lg:w-[22rem] lg:h-[22rem] lg:rounded-tr-none rounded-tr-full rounded-tl-full rounded-b-full overflow-hidden bg-gradient-to-tr from-blue-900 to-blue-500 border-secondary border-2 shadow-2xl">
            <Image 
                src={carlos} 
                height={0} 
                width={0} 
                alt="Carlos Tortorella" 
                className="absolute top-0 object-cover h-[16rem] lg:h-[32rem]"
            />
        </div>
    )
}