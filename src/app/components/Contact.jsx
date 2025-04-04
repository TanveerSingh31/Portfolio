

export default function Contact() {
    return (
        <div id="Contact" className="w-1/3 flex flex-col items-center gap-10 mt-[10rem]">
            <h2 className="text-4xl font-bold">Contact</h2>
            <p className="font-medium">Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
            <form className="w-full flex flex-col justify-start gap-3">
                <input placeholder="Name" className="p-2 border-2 rounded"></input>
                <input placeholder="Email" className="p-2 border-2 rounded"></input>
                <textarea placeholder="Message" className="p-2 border-2 rounded h-30"></textarea>
                <div className="flex justify-end">
                    <button className="btn bg-blue-200">Submit</button>
                </div>
            </form>
        </div>
    )
} 
