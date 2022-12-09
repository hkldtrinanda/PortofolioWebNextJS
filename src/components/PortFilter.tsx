/* eslint-disable jsx-a11y/alt-text */

export default function PortFilter() {
    const portfilter = [
        {
            videos: "https://www.youtube.com/embed/fVjcxxwxWpw",
            titlegame: "If you are a GameDev (Phone Only)",
            developename: "Instagram Filter",
            tlproject: "Start",
            tleproject: "End",
            roleproject: "Role",
            green: "Dec 2022",
            red: "Dec 2022",
            role: "Meta AR",
            href: "https://www.instagram.com/ar/844820773496835/",
        },
        {
            videos: "https://www.youtube.com/embed/lGHWriquZ1E",
            titlegame: "Gametech Anniversary Filter",
            developename: "Instagram Filter",
            tlproject: "Start",
            tleproject: "End",
            roleproject: "Role",
            green: "Dec 2022",
            red: "Dec 2022",
            role: "Meta AR",
            href: "https://www.instagram.com/ar/542025174179652/",
        },
        {
            videos: "https://www.youtube.com/embed/sQT1N2RNUHI",
            titlegame: "Garuda Headband",
            developename: "Instagram Filter",
            tlproject: "Start",
            tleproject: "End",
            roleproject: "Role",
            green: "Aug 2022",
            red: "Aug 2022",
            role: "Meta AR",
            href: "https://www.instagram.com/ar/1206852030153176/",
        },
    ];

    return (
        <>
            {/* Gallery */}
            <section className="py-8 bg-gray-100" id="works">
                <div className="container px-4 mx-auto ">
                    <p className="font-light text-md md:text-lg xl:text-2xl my-6 text-gray-400">Instagram Filter</p>
                    <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
                        {portfilter.map((item, index) => {
                            return (
                                <div className="p-4 bg-white rounded-lg shadow-xl" key={index}>
                                    <div className="relative h-40 w-full mb-4">
                                        <iframe
                                            src={item.videos}
                                            className="w-full h-full object-cover rounded shadow-lg"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                    </div>
                                    <div className="flex mb-6 justify-between items-center">
                                        <div>
                                            <h3 className="text-sm font-medium">{item.titlegame}</h3>
                                            <span className="text-xs text-gray-500">{item.developename}</span>
                                        </div>
                                    </div>
                                    <div className="flex mb-2 justify-between items-center">
                                        <h4 className="text-xs font-medium">{item.tlproject}</h4>
                                        <span className="inline-block py-1 px-2 rounded-full bg-green-50 text-xs text-green-500">{item.green}</span>
                                    </div>
                                    <div className="flex mb-2 justify-between items-center">
                                        <h4 className="text-xs font-medium">{item.tleproject}</h4>
                                        <span className="inline-block py-1 px-2 rounded-full bg-red-50 text-xs text-red-500">{item.red} </span>
                                    </div>
                                    <div className="flex mb-5 justify-between items-center">
                                        <h4 className="text-xs font-medium">{item.roleproject}</h4>
                                        <span className="text-xs text-indigo-500 font-medium">{item.role} </span>
                                    </div>
                                    <div className="flex items-ceenter justify-between border-t border-gray-50 pt-4">
                                        <a className="py-2 px-3 bg-indigo-500 hover:bg-indigo-600 rounded text-xs text-white transition duration-200" target="_blank" href={item.href} rel="noreferrer">
                                            See Details
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
