export function Part3(){
    return <div className="container">
        <header className="header w-96 flex items-center justify-between">
            <div className="hover:text-green-500 transition-colors
            duration-500 ease-in-out cursor-pointer
            bg-green-50/10 px-5 py-2
            shadow shadow-green-500">Logo</div>
            <ul className="flex items-center gap-5">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
            </ul>
            <button className="animate-pulse">Contact</button>
        </header>
        <section className="grid grid-cols-3 gap-6 mt-10">
            <div className="">IMAGE</div>
            <div>IMAGE</div>
            <div>IMAGE</div>
            <div>IMAGE</div>
            <div>IMAGE</div>
            <div>IMAGE</div>
            <div>IMAGE</div>
            <div>IMAGE</div>
            <div>IMAGE</div>
        </section>
    </div>
}