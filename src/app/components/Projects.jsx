import Image from 'next/image';

export default function Projects() {
    return (
        <section id="Projects">
            <div className="w-full grid grid-cols-4 place-items-center mt-[8rem]">
                <h1 className="mb-[8rem] col-span-4 text-4xl font-bold"> Projects </h1>
                <div className="col-span-2">
                    
                    <div className='col-span-2'>
                        <Image src="/KeeperApp.png" height="350" width="600"></Image>
                    </div>
                </div>

                <div className="col-span-2 mt-6 self-start">
                    <div className="flex flex-col justify-center gap-4">
                        <h2 className='text-4xl font-bold text-'>Todo App</h2>
                        <p className='mx-2'>Keep track of tasks with custom project folders and notes.</p>
                        <div className='mt-4 text-xl italic font-medium font-mono'>
                            <a href="https://github.com/TanveerSingh31/Authentication-jwt" target="_blank" className='mx-2 hover:border-b-6 border-black'>Github</a>
                            <a href="https://keeperapp-tanveer.netlify.app/" target="_blank" className='mx-2 hover:border-b-6 border-blue-600'>Live</a>
                        </div>
                    </div>
                </div>

                
            </div> 
        </section>
    )
        
}