import React from 'react';
import Link from "next/link";
import {AcademicCapIcon} from "@heroicons/react/24/solid";
import {useCredits} from "../../context/credits";
import {CurrencyPoundIcon} from "@heroicons/react/20/solid";

function Navbar({title}) {
    const {credits, setCredits} = useCredits()

    return (
        <div className={"h-16 w-full flex flex-row bg-gray-800 border-b border-gray-700 items-center pr-2"}>
            <div className={"flex w-16 h-16 items-center justify-center border-r border-gray-700"}>
                <Link href={"/"} passHref>
                    <a>
                        <AcademicCapIcon className={"text-blue-600 h-12 w-12"}/>
                    </a>
                </Link>
            </div>

            <div className={"text-4xl text-gray-200 font-semibold pl-2"}>{title}</div>

            <div className={"flex-1"}/>

            <div className={"flex flex-row gap-2 border border-yellow-600 rounded py-2 px-4 justify-center items-center"}>
                <CurrencyPoundIcon className={"w-4 h-4 text-yellow-600"}/>
                <div className={"text-yellow-200"}>{credits}</div>
            </div>

           <Link href={"/withdraw"} passHref>
               <a className={"bg-green-700 text-white py-2 px-4 rounded ml-2"}>
                   Withdraw
               </a>
           </Link>
        </div>
    );
}

export default Navbar;
