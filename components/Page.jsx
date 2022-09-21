import React from 'react';
import Sidebar from "./elements/Sidebar";

function Page({children}) {
    return (
        <div className={"min-h-screen w-screen bg-gray-900"}>
            <Sidebar/>
            <main className={"ml-16 p-2 text-white"}>
                {children}
            </main>
        </div>
    );
}

export default Page;
