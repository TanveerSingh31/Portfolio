import Image from 'next/image';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

export default function Footer() {
    return (
        <div className="flex gap-4 p-10 justify-center bg-black text-white font-bold italic"> 
            <a href="https://github.com/TanveerSingh31" target="_blank">
                <Image src="/github.png" width="40" height="40" />
            </a>
            
            <a href="https://www.linkedin.com/in/tanveer-singh-12178b1ab" target="_blank">
                <Image src="/linkedin.png" width="40" height="40" className="rounded-full"></Image>
            </a>

            <a href="mailto:tanveersinghnayyar.queries@gmail.com" target="_blank" >
                    <Image src="/email.png" width="40" height="40"></Image>
            </a>


            <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <a href="tel:+91 8360763689" target="_blank" >
                                <Image src="/phone.png" width="40" height="40" className="rounded-full"></Image>
                            </a> 
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className='text-white text-xl'>(+91) 83607-63689</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            
            

        </div>
    )
}