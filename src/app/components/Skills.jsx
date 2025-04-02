import Image from 'next/image';

function SkillIcon({name}) {
    console.log(__dirname);
    let skillImagePath = `/${name}.png`;
    return (
        <div>
            <Image src={skillImagePath} width={50} height={50} />
            <p className="font-bold mt-1 mb-6">{name}</p>
        </div>
    );
}



export default function Skills() {
    return (
        <div className="w-full">
            <h2 className="text-4xl font-bold">Skills</h2>
            <div className="w-1/2 flex justify-around border-4">
                <div className="flex-col justify-between">
                    <SkillIcon name='Javascript'/>
                    <SkillIcon name='html'/>
                    <SkillIcon name='css'/>
                </div>
                <div className="flex-col justify-between">
                    <SkillIcon name='node'/>
                    <SkillIcon name='express'/>
                    <SkillIcon name='mongodb'/>
                </div>
                <div className="flex-col justify-between">
                    <SkillIcon name='next'/>
                    <SkillIcon name='git'/>
                    <SkillIcon name='css'/>
                </div>
            </div>
        </div>
    )
} 