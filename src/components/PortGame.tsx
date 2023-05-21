/* eslint-disable jsx-a11y/alt-text */

export default function PortGame() {
    const portofolio = [
        {
            image: "/porto/tatj.png",
            titlegame: "The Assasins: The Journey",
            developename: "Game Development (first time learning gamedev, and my first game)",
            tlproject: "Start",
            tleproject: "End",
            roleproject: "Role",
            green: "Q1 2021",
            red: "Q2 2021",
            role: "Game Programming",
            direct: "https://sharemygame.com/@hkldtrinanda/theassasins-thejourney",
            legal: "#",
        },
        {
            image: "/porto/inesh.png",
            titlegame: "Inertia Showdown",
            developename: "Game Development",
            tlproject: "Start",
            tleproject: "End",
            roleproject: "Role",
            green: "25 Nov 2021",
            red: "10 Jan 2022",
            role: "Game Programming",
            direct: "https://potatoprod.itch.io/inertia-showdown",
            legal: "#",
        },
        {
            image: "/porto/alm.png",
            titlegame: "A La Mode - Nusantara",
            developename: "Game Development (Not Finished)",
            tlproject: "Start",
            tleproject: "End",
            roleproject: "Role",
            green: "25 Mar 2022",
            red: "On Going",
            role: "Game Programming",
            direct: "#",
            legal: "#",
        },
        {
            image: "/porto/isvara.png",
            titlegame: "Isvara",
            developename: "Game Development",
            tlproject: "Start",
            tleproject: "End",
            roleproject: "Role",
            green: "7 Apr 2022",
            red: "31 May 2022",
            role: "Game Programming",
            direct: "https://hkldtrinanda.itch.io/isvara-mobile-ar",
            legal: "#",
        },
        {
            image: "/porto/ui.jpg",
            titlegame: "Ngebook",
            developename: "Interactive Media",
            tlproject: "Start",
            tleproject: "End",
            roleproject: "Role",
            green: "Q3 2019",
            red: "Q4 2019",
            role: "Programming",
            direct: "https://hkldtrinanda.itch.io/ngebook",
            legal: "#",
        },
        {
            image: "/porto/FS.png",
            titlegame: "Fire Safety",
            developename: "Game Development",
            tlproject: "Start",
            tleproject: "End",
            roleproject: "Role",
            green: "6 Jun 2022",
            red: "24 Sep 2022",
            role: "Game Programming",
            direct: "https://hkldtrinanda.itch.io/fire-safety",
            legal: "https://pdki-indonesia.dgip.go.id/detail/EC00202275496?type=copyright&keyword=",
        },
        {
            image: "/porto/DHITW.png",
            titlegame: "Discover Hazard In The Workplace",
            developename: "Game Development",
            tlproject: "Start",
            tleproject: "End",
            roleproject: "Role",
            green: "15 Oct 2022",
            red: "10 Nov 2022",
            role: "Game Programming",
            direct: "https://cemong-studio.itch.io/dhitw",
            legal: "https://pdki-indonesia.dgip.go.id/detail/EC002022104276?type=copyright&keyword=",
        },
        {
            image: "/porto/AC.png",
            titlegame: "Asterism Completion",
            developename: "Game Development",
            tlproject: "Start",
            tleproject: "End",
            roleproject: "Role",
            green: "11 Nov 2022",
            red: "13 Nov 2022",
            role: "Game Programming",
            direct: "https://cemong-studio.itch.io/asterism-completion",
            legal: "#",
        },
        {
            image: "/porto/TEOE.png",
            titlegame: "The Emerald of Equator",
            developename: "Game Development",
            tlproject: "Start",
            tleproject: "End",
            roleproject: "Role",
            green: "11 Nov 2022",
            red: "11 Dec 2022",
            role: "Game Programming",
            direct: "https://cemong-studio.itch.io/aratnasun",
            legal: "#",
        },
    ];

    return (
        <>
            {/* Gallery */}
            <section className="py-8 bg-gray-100" id="works">
                <div className="container px-4 mx-auto ">
                    <p className="font-medium text-xl md:text-3xl xl:text-7xl mb-5">My Works</p>
                    <p className="font-light text-lg md:text-xl xl:text-4xl my-6 text-gray-400">Here is the work I have done before, I hope you enjoy it</p>
                    <p className="font-light text-md md:text-lg xl:text-2xl my-6 text-gray-400">Game Development</p>

                    <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
                        {portofolio.map((item, index) => {
                            return (
                                <div className="p-4 bg-white rounded-lg shadow-xl" key={index}>
                                    <div className="relative h-40 w-full mb-4">
                                        <img className="w-full h-full object-cover rounded shadow-lg" src={item.image} alt="" />
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
                                    <div className="flex grid-cols-2 justify-left gap-4">
                                        <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                                            <p className="py-2 px-3 bg-indigo-500 hover:bg-indigo-600 rounded text-xs text-white transition duration-200">
                                                <a href={item.direct} target="_blank" rel="noreferrer">
                                                    See Details
                                                </a>
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                                            <p className="py-2 px-3 bg-indigo-500 hover:bg-indigo-600 rounded text-xs text-white transition duration-200">
                                                <a href={item.legal} target="_blank" rel="noreferrer">
                                                    Legal Details
                                                </a>
                                            </p>
                                        </div>
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
