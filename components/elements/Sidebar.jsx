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
        <div className={"fixed flex flex-col items-center min-h-screen w-16 bg-gray-800 gap-2 border-r border-gray-700"}>
            {links.map(({title, link, icon}, i) => <SidebarLink key={i} title={title} link={link} icon={icon}/>)}
        </div>
    );
}

export default Sidebar;
