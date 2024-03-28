"use client"

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import AutoPlay from "embla-carousel-autoplay"
import image1 from "../../public/image1.webp"
import image2 from "../../public/image2.webp"
import image3 from "../../public/image3.webp"

export default function HomeBannerCarousel(){
    return (
        <>
            <Carousel 
            className="flex h-screen w-full items-center justify-center"
               plugins={[
                AutoPlay({
                    delay: 5000,
                })
               ]} 
               opts={{
                loop: true,
               }}
            >
                <CarouselContent>
                <CarouselItem>
                    <Image src={image1} 
                    className="brightness-75 object-cover w-full h-screen" alt="banner image" width={0} height={0} sizes="100vw" priority/>
                    </CarouselItem>
                <CarouselItem>
                    <Image src={image2} 
                    className="brightness-75 object-cover w-full h-screen" alt="banner image" width={0} height={0} sizes="100vw" priority/>
                </CarouselItem>
                <CarouselItem>
                    <Image src={image3} 
                    className="brightness-75 object-cover w-full h-screen" alt="banner image" width={0} height={0} sizes="100vw" priority/>
                </CarouselItem>
                </CarouselContent>
            </Carousel>
        </>
    )
}