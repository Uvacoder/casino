import React from 'react';
import Sidebar from "./elements/Sidebar";
import Navbar from "./elements/Navbar";

function Page({title = "Unnamed", children}) {
    return (
        <div className={"min-h-screen w-screen bg-gray-900"}>
            <Navbar title={title}/>
            <Sidebar/>

            <main className={"ml-16 p-2 text-white"}>
                {children}
            </main>
        </div>
    );
}

export default Page;
