/* eslint-disable jsx-a11y/alt-text */

export default function Portofolio() {
    const portofolio = [
        {
            image: "/porto/tatj.png",
            titlegame: "The Assasins: The Journey",
            developename: "Game Development",
            tlproject: "Start",
            tleproject: "End",
            roleproject: "Role",
            green: "Q1 2021",
            red: "Q2 2021",
            role: "Game Programming",
            href: "",
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
            href: "https://potatoprod.itch.io/inertia-showdown",
        },
        {
            image: "/porto/alm.png",
            titlegame: "A La Mode - Nusantara",
            developename: "Game Development",
            tlproject: "Start",
            tleproject: "End",
            roleproject: "Role",
            green: "25 Mar 2022",
            red: "On Going",
            role: "Game Programming",
            href: "",
        },
        {
            image: "/porto/isvara.png",
            titlegame: "Isvara",
            developename: "Game Development",
            tlproject: "Start",
            tleproject: "End",
            roleproject: "Role",
            green: "7 Apr 2022",
            red: "On Going",
            role: "Game Programming",
            href: "",
        },
        {
            image: "/porto/404.png",
            titlegame: "Ngebook",
            developename: "Interactive Media",
            tlproject: "Start",
            tleproject: "End",
            roleproject: "Role",
            green: "Q3 2019",
            red: "Q4 2019",
            role: "Programming",
            href: "",
        },
        {
            image: "/porto/404.png",
            titlegame: "-",
            developename: "Game Development",
            tlproject: "Start",
            tleproject: "End",
            roleproject: "Role",
            green: "On Going",
            red: "On Going",
            role: "Game Programming",
            href: "",
        },
    ];

    return (
        <>
            {/* Gallery */}
            <section className="py-8 bg-gray-100" id="works">
                <div className="container px-4 mx-auto ">
                    <p className="font-medium text-xl md:text-3xl xl:text-7xl mb-5">My Works</p>
                    <p className="font-light text-lg md:text-xl xl:text-4xl my-6 text-gray-400">Here is the work I have done before, I hope you enjoy it</p>

                    <div className="grid grid-cols-3 gap-4 p-4">
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
                                    <div className="flex items-ceenter justify-between border-t border-gray-50 pt-4">
                                        <a className="py-2 px-3 bg-indigo-500 hover:bg-indigo-600 rounded text-xs text-white transition duration-200" href={item.href}>
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
