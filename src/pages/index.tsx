/* eslint-disable jsx-a11y/alt-text */
export default function Home() {
    const navbar = [
        {
            label: "Home",
            href: "#",
        },
        {
            label: "About",
            href: "#",
        },
        {
            label: "Works",
            href: "#",
        },
        {
            label: "Contact",
            href: "#",
        },
    ];
    const footer = [
        {
            logo: "/github.png",
            href: "#",
        },
        {
            logo: "/lid.png",
            href: "#",
        },
    ];
    return (
        <>
            <div>
                <section className="text-white text-lg font-sans font-bold relative bg-gray-900">
                    <nav className="flex justify-between px-6 lg:px-12 py-4">
                        <div className="flex w-full justify-between grid-cols-2">
                            <a href="#">
                                <img className="h-12" src="images/he.png" alt="" />
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
                        <button className="navbar-burger self-center xl:hidden focus:outline-none">
                            <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="25" height="2" fill="currentColor"></rect>
                                <rect y="14" width="25" height="2" fill="currentColor"></rect>
                            </svg>
                        </button>
                    </nav>
                    <div className="navbar-menu hidden fixed top-0 right-0 bottom-0 w-5/6 max-w-sm z-50">
                        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                        <nav className="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
                            <div className="flex items-center pl-16 mb-8">
                                <a className="text-2xl text-gray-800 font-bold" href="#">
                                    <img className="h-12" src="images/he_blck.png" alt="" />
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
                                    <span className="text-sm text-darkBlueGray-400">2021 © hkldtrinanda.</span>
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
                {/* Profile */}
                <section>
                    <div className="bg-gray-100">
                        <div className="container px-4 mx-auto">
                            <div className="relative pt-24 mb-16 xl:mb-0 z-20">
                                <span className="block mb-9 font-medium tracking-widest uppercase text-center text-sm text-gray-300 items-center">Hi, Welcome</span>
                                <h1 className="max-w-3xl mx-auto font-heading font-medium text-center text-6xl md:text-10xl leading-tight">I`M HAIKAL DANUNG TRINANDA</h1>
                            </div>
                        </div>
                        <div className="relative xl:-mt-32 max-w-max mx-auto ">
                            <img src="/widget3.png" alt="" className="items-center" />
                        </div>
                    </div>
                </section>
            </div>
            <section className="bg-gray-100 py-24 2xl:py-44 overflow-hidden" id="about">
                <div className="container px-4 mx-auto">
                    <div className="text-center">
                        <span className="text-sm text-gray-300 uppercase">Who Am I?</span>
                        <h2 className="mt-8 mb-24 font-heading font-medium text-xl md:text-4xl xl:text-7xl">Here you can recognize me</h2>
                    </div>
                    <div className="flex flex-wrap items-center justify-center -mx-4 mb-16 md:mb-28">
                        <div className="w-auto px-4 mb-4 xl:mb-0 text-center order-last sm:order-first">
                            <a className="inline-block" href="#">
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
                            </a>
                        </div>
                        <div className="w-full sm:w-2/3 max-w-4xl px-4 mx-auto mb-16 sm:mb-0 ">
                            <div className="relative mb-5 px-8 md:px-20 bg-white rounded-xl shadow-lg py-14">
                                <img className="absolute top-0 right-0 mr-12 transform -translate-y-1/2" src="/quote-2.svg" alt="" />
                                <p className="text-lg md:text-xl font-heading font-medium">
                                    A student from Jakarta who is currently pursuing a bachelor's degree at one of the state Universities in Jakarta by taking the Game Technology Study Program
                                </p>
                            </div>
                            <div className="flex flex-wrap -mx-4 ">
                                <div className="w-full lg:w-1/2 px-4 lg:flex-grow mb-8 lg:mb-0" data-aos="fade-right" data-aos-duration="1000">
                                    <div className="h-full flex items-center py-5 px-8 md:px-20 bg-white rounded-xl shadow-lg">
                                        <div className="flex items-center justify-center text-left">
                                            <img className="mr-8 object-cover rounded-full w-20" src="/Untitled1111.png" alt="" />
                                            <div>
                                                <h4 className="text-xl font-heading font-medium mb-2">Haikal D Trinanda</h4>
                                                <p className="text-gray-400">Runes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 px-4 lg:flex-grow" data-aos="fade-left" data-aos-duration="1000">
                                    <div className="h-full pl-12 pr-4 bg-white rounded-xl shadow-lg py-12">
                                        <div className="flex items-center">
                                            <div className="mr-4">
                                                <p className="text-base rounded-full py-4 px-8 bg-sky-500 text-white border-transparent">My Resume</p>
                                            </div>
                                            <div className="rounded-full px-8 py-4 border-transparent bg-gray-100">
                                                <span className="font-medium text-base">My CV</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-auto px-4 mb-4 xl:mb-0 text-center order-last">
                            <a className="inline-block" href="#"></a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Gallery */}
            <section className="py-8 bg-gray-100">
                <div className="container px-4 mx-auto  ">
                    <p className="font-medium text-xl md:text-3xl xl:text-7xl mb-5">My Works</p>
                    <p className="font-light text-lg md:text-xl xl:text-4xl my-6 text-gray-400">Here is the work I have done before, I hope you enjoy it</p>
                    <div className="flex flex-wrap -m-4">
                        <div className="w-full lg:w-1/3 p-4 ">
                            <div className="p-4 bg-white rounded-lg shadow-xl">
                                <div className="relative h-40 w-full mb-4">
                                    <img className="w-full h-full object-cover rounded shadow-lg" src="/porto/tatj.png" alt="" />
                                </div>
                                <div className="flex mb-6 justify-between items-center">
                                    <div>
                                        <h3 className="text-sm font-medium">The Assasins The Journey</h3>
                                        <span className="text-xs text-gray-500">Game Development</span>
                                    </div>
                                </div>
                                <div className="flex mb-2 justify-between items-center">
                                    <h4 className="text-xs font-medium">Start</h4>
                                    <span className="inline-block py-1 px-2 rounded-full bg-green-50 text-xs text-green-500">Q1 2021</span>
                                </div>
                                <div className="flex mb-2 justify-between items-center">
                                    <h4 className="text-xs font-medium">Final Date</h4>
                                    <span className="inline-block py-1 px-2 rounded-full bg-red-50 text-xs text-red-500">Q2 2021</span>
                                </div>
                                <div className="flex mb-5 justify-between items-center">
                                    <h4 className="text-xs font-medium">Role</h4>
                                    <span className="text-xs text-indigo-500 font-medium">Game Programming</span>
                                </div>
                                <div className="flex items-ceenter justify-between border-t border-gray-50 pt-4">
                                    <a className="py-2 px-3 bg-indigo-500 hover:bg-indigo-600 rounded text-xs text-white transition duration-200" href="#">
                                        See Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 p-4">
                            <div className="p-4 bg-white rounded-lg shadow-xl">
                                <div className="relative h-40 w-full mb-4">
                                    <img className="w-full h-full object-cover rounded shadow-lg" src="/porto/inesh.png" alt="" />
                                </div>
                                <div className="flex mb-6 justify-between items-center">
                                    <div>
                                        <h3 className="text-sm font-medium">Inertia Showdown</h3>
                                        <span className="text-xs text-gray-500">Game Development</span>
                                    </div>
                                </div>
                                <div className="flex mb-2 justify-between items-center">
                                    <h4 className="text-xs font-medium">Start</h4>
                                    <span className="inline-block py-1 px-2 rounded-full bg-green-50 text-xs text-green-500">25 Nov 2021</span>
                                </div>
                                <div className="flex mb-2 justify-between items-center">
                                    <h4 className="text-xs font-medium">Final Date</h4>
                                    <span className="inline-block py-1 px-2 rounded-full bg-red-50 text-xs text-red-500">10 Jan 2022</span>
                                </div>
                                <div className="flex mb-5 justify-between items-center">
                                    <h4 className="text-xs font-medium">Role</h4>
                                    <span className="text-xs text-indigo-500 font-medium">Game Programming</span>
                                </div>
                                <div className="flex items-ceenter justify-between border-t border-gray-50 pt-4">
                                    <a className="py-2 px-3 bg-indigo-500 hover:bg-indigo-600 rounded text-xs text-white transition duration-200" href="https://potatoprod.itch.io/inertia-showdown">
                                        See Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 p-4">
                            <div className="p-4 bg-white rounded-lg shadow-xl">
                                <div className="relative h-40 w-full mb-4">
                                    <img className="w-full h-full object-cover rounded shadow-lg" src="/porto/alm.png" alt="" />
                                </div>
                                <div className="flex mb-6 justify-between items-center">
                                    <div>
                                        <h3 className="text-sm font-medium">à la mode — nusantara</h3>
                                        <span className="text-xs text-gray-500">Game Development</span>
                                    </div>
                                </div>
                                <div className="flex mb-2 justify-between items-center">
                                    <h4 className="text-xs font-medium">Start</h4>
                                    <span className="inline-block py-1 px-2 rounded-full bg-green-50 text-xs text-green-500">2 Mar 2022</span>
                                </div>
                                <div className="flex mb-2 justify-between items-center">
                                    <h4 className="text-xs font-medium">Final Date</h4>
                                    <span className="inline-block py-1 px-2 rounded-full bg-red-50 text-xs text-red-500">On Going</span>
                                </div>
                                <div className="flex mb-5 justify-between items-center">
                                    <h4 className="text-xs font-medium">Role</h4>
                                    <span className="text-xs text-indigo-500 font-medium">Game Programming</span>
                                </div>
                                <div className="flex items-ceenter justify-between border-t border-gray-50 pt-4">
                                    <a className="py-2 px-3 bg-indigo-500 hover:bg-indigo-600 rounded text-xs text-white transition duration-200" href="#">
                                        See Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="pt-10 pb-12">
                        <div className="relative lg:pb-8 mb-8 flex flex-wrap lg:border-b lg:border-gray-300">
                            <p className="w-full lg:w-auto text-gray-400 text-sm text-center lg:text-left order-last lg:order-first">© 2021. All rights reserved.</p>
                            <div className="mb-12 lg:mb-0 lg:ml-auto w-full lg:w-auto order-first lg:order-last text-center lg:text-left">
                                <a className="inline-block text-xl font-bold leading-none" href="#">
                                    <img className="inline-block h-12 lg:h-6" src="atis-assets/logo/atis/atis-mono-black.svg" alt="" width="auto" />
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="">
                                {footer.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <a className="inline-block w-10 mr-2 p-2 rounded"></a>
                                            <img src={item.logo} alt="" className="mx-auto hover:bg-opacity-50" />
                                        </div>
                                    );
                                })}
                            </div>
                            {/* <a className="inline-block w-10 mr-2 p-2 rounded" href="#">
                                <img className="mx-auto hover:bg-opacity-50" src="/social/lid.png" />
                            </a>
                            <a className="inline-block w-10 p-2 rounded" href="#">
                                <img className="mx-auto hover:bg-opacity-50" src="/social/github.png" />
                            </a> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
