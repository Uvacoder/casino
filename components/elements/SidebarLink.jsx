import React, {useState} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";

function SidebarLink({title, link, icon}) {
    let router = useRouter()
    const [triggered, setTriggered] = useState(false);

    return (
        <div
            className={`flex flex-row h-16 w-16 justify-center items-center border-r ${router.pathname === link ? "border-blue-600" : "border-transparent"}`}>
            <Link href={link} passHref>
                <a className={`text-gray-100 hover:text-gray-300 transition h-12 w-12`}
                   onMouseOver={() => setTriggered(true)} onMouseLeave={() => setTriggered(false)}>
                    {icon}
                </a>
            </Link>

            {triggered &&
                <div className={"fixed flex justify-center items-center left-16 bg-gray-700 h-16 w-48 rounded-r"}>
                    <div className={"text-white"}>{title}</div>
                </div>
            }
        </div>
    );
}

export default SidebarLink;
