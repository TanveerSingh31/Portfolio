import Image from 'next/image';

function SkillIcon({name}) {
    console.log(__dirname);
    let skillImagePath = `/${name}.png`;
    return (
        <div className='flex flex-col items-center justify-center border-1 rounded-2xl my-2 p-2 w-30 h-30'>
            <Image src={skillImagePath} width={50} height={50} />
            <p className="font-bold mt-1 uppercase">{name}</p>
        </div>
    );
}



export default function Skills() {
    return (
        <div className="flex flex-col items-center w-full gap-4">
            <h2 className="text-4xl font-bold">Skills</h2>
            <div className="w-1/2 flex justify-center gap-4">
                <div className="flex flex-col justify-center">
                    <SkillIcon name='Javascript'/>
                    <SkillIcon name='html'/>
                    <SkillIcon name='css'/>
                </div>
                <div className="flex flex-col justify-center">
                    <SkillIcon name='mongodb'/>
                    <SkillIcon name='express.js'/>
                    <SkillIcon name='react.js'/>
                    <SkillIcon name='node.js'/>
                </div>
                <div className="flex flex-col justify-center">
                    <SkillIcon name='next.js'/>
                    <SkillIcon name='git'/>
                    <SkillIcon name='css'/>
                </div>
            </div>
        </div>
    )
} 