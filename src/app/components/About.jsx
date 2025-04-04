import Image from 'next/image';

export default function About() {
    return (
        <section id="About">
            <div className="flex flex-col gap-6 items-center text-center w-3xl my-4 mt-[8rem]">
                <h2 className="text-4xl font-bold">About</h2>    
                
                <Image src="/profile.svg" width="200" height="200"></Image> 
                <p>
                    Fully committed to the philosophy of life-long learning, I’m a full stack developer with a deep passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I’m not at my computer I like to spend my time reading, keeping fit and playing guitar.
                </p>
            
            </div>
        </section>
    )
}