/* eslint-disable jsx-a11y/alt-text */

export default function NavigationBar() {
    const navbar = [
        {
            label: "Home",
            href: "#",
        },
        {
            label: "About",
            href: "#about",
        },
        {
            label: "Works",
            href: "#works",
        },
        {
            label: "Contact",
            href: "#contact",
        },
    ];

    return (
        <>
            <div>
                <section className="text-white text-lg font-sans font-bold relative bg-gray-900">
                    <nav className="flex justify-between px-6 lg:px-12 py-4">
                        <div className="flex w-full justify-between grid-cols-2">
                            <a href="#">
                                <img className="h-12" src="/he.png" alt="" />
                            </a>
                            <div className="flex items-center ml-auto">
                                <ul className="hidden px-4 xl:flex">
                                    <li className="">
                                        {navbar.map((item, index) => {
                                            return (
                                                <a key={index} className="hover:opacity-80 mr-11 border-b border-blue-500 border-opacity-40 pb-px" href={item.href}>
                                                    {item.label}
                                                </a>
                                            );
                                        })}
                                    </li>
                                    <li className="border-b border-blue-500 border-opacity-40 pb-px"></li>
                                </ul>
                            </div>
                            <div className="relative hidden xl:block">
                                <img className="absolute top-1/2 transform -translate-y-2/4 pl-6 mt-px" src="uinel-assets/elements/navigations/search-gray-icon.svg" alt="" />
                            </div>
                        </div>
                        {/* Mobile Responsive */}
                        <button className="navbar-burger self-center xl:hidden focus:outline-none">
                            <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="25" height="2" fill="currentColor"></rect>
                                <rect y="14" width="25" height="2" fill="currentColor"></rect>
                            </svg>
                        </button>
                    </nav>
                    {/* Mobile Responsive */}
                    <div className="navbar-menu hidden fixed top-0 right-0 bottom-0 w-5/6 max-w-sm z-50">
                        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                        <nav className="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
                            <div className="flex items-center pl-16 mb-8">
                                <a className="text-2xl text-gray-800 font-bold" href="#">
                                    <img className="h-12" src="he_blck.png" alt="" />
                                </a>
                            </div>
                            <div className="flex items-center mb-10 px-10">
                                <a className="flex items-center ml-1" href="#" />
                            </div>
                            <div>
                                <ul>
                                    <li className="">
                                        {navbar.map((item, index) => {
                                            return (
                                                <a key={index} className="hover:opacity-80 mr-11 border-b border-blue-500 border-opacity-40 pb-px" href={item.href}>
                                                    {item.label}
                                                </a>
                                            );
                                        })}
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto px-10">
                                <button className="py-3 px-5 mt-6 w-full font-body font-bold uppercase tracking-wide text-sm border-2 border-gray-200 hover:border-gray-300 border-opacity-50 rounded-full">
                                    <a className="block mt-px text-gray-500" href="#porto">
                                        My Works
                                    </a>
                                </button>
                                <p className="mt-6 mb-4 text-center">
                                    <span className="text-sm text-darkBlueGray-400">2023 © hkldtrinanda.</span>
                                </p>
                            </div>
                        </nav>
                        <button className="navbar-close absolute top-5 p-6 right-5">
                            <div className="absolute top-3">
                                <span className="absolute w-px h-6 bg-black transform -rotate-45"></span>
                                <span className="absolute w-px h-6 bg-black transform rotate-45"></span>
                            </div>
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
