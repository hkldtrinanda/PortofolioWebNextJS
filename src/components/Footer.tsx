/* eslint-disable jsx-a11y/alt-text */

export default function Footers() {
    const footer = [
        {
            logo: "/social/github.png",
            href: "https://github.com/hkldtrinanda",
        },
        {
            logo: "/social/lid.png",
            href: "https://www.linkedin.com/in/hkldtrinanda/",
        },
        {
            logo: "/social/itchio.png",
            href: "https://hkldtrinanda.itch.io/",
        },
    ];

    return (
        <>
            {/* Gallery */}
            <section className="bg-gray-50" id="contact">
                <div className="container mx-auto px-4">
                    <div className="pt-10 pb-12">
                        <div className="relative lg:pb-8 mb-8 flex flex-wrap lg:border-b lg:border-gray-300">
                            <p className="w-full lg:w-auto text-gray-400 text-sm text-center lg:text-left order-last lg:order-first inline-block">© 2022. All rights reserved.</p>
                            <div className="mb-6 lg:mb-0 lg:ml-auto w-full lg:w-auto order-first lg:order-last text-center lg:text-center">
                                <a href="#">
                                    <img className="inline-block lg:h-10 md:h-8 sm:h-6 h-8 " src="/he_blck.png" alt="" width="auto" />
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="grid grid-cols-3 ">
                                {footer.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <a className="inline-block w-10 mr-2 p-2 rounded" href={item.href}>
                                                <img src={item.logo} alt="" className="mx-auto hover:bg-opacity-10" />
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
