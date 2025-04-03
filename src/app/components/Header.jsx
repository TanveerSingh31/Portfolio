export default function Header() {
    return (
        <div className="w-full flex justify-end gap-3 text-xl font-bold bg-amber-50 sticky top-0 px-20 py-1">
            <a href="#" className="m-2 ">Home</a>
            <a href="#About" className="m-2 scroll-smooth">About</a>
            <a href="#Projects" className="m-2">Projects</a>
            <a href="#Contact" className="m-2 scroll-smooth">Contact</a>
        </div>
    );
}