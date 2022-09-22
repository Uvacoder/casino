import React from 'react';
import SidebarLink from "./SidebarLink";
import {AcademicCapIcon} from "@heroicons/react/24/solid";
import {
    ArrowRightOnRectangleIcon,
    ChartPieIcon,
    RectangleStackIcon,
    RocketLaunchIcon,
    Square3Stack3DIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

let links = [
    {
        title: "Fruit Machine",
        link: "/fruit-machine",
        icon: <Square3Stack3DIcon/>,
    },
    {
        title: "Mystery Boxes",
        link: "/unboxing",
        icon: <RectangleStackIcon/>,
    },
    {
        title: "Jackpot",
        link: "/jackpot",
        icon: <ChartPieIcon/>,
    },
    {
        title: "Crash",
        link: "/crash",
        icon: <RocketLaunchIcon/>,
    },
]

function Sidebar(props) {
    return (
        <div className={"fixed flex flex-col items-center min-h-screen w-16 bg-gray-800 p-2 gap-2"}>
            <div className={"flex w-16 h-16 mb-4 items-center justify-center"}>
                <Link href={"/"} passHref>
                    <a><AcademicCapIcon className={"text-blue-900 h-14 w-14"}/></a>
                </Link>
            </div>

            {links.map(({title, link, icon}, i) => <SidebarLink key={i} title={title} link={link} icon={icon}/>)}

            <div className={"flex flex-1"}/>
            <Link href={"/auth/logout"} passHref>
                <a>
                    <ArrowRightOnRectangleIcon className={"text-gray-100 hover:text-gray-300 transition h-12 w-12"}/>
                </a>
            </Link>
        </div>
    );
}

export default Sidebar;
