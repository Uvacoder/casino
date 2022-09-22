import React from 'react';
import Sidebar from "./elements/Sidebar";

function Page({children, title}) {
    return (
        <div className={"min-h-screen w-screen bg-gray-900"}>
            <Sidebar/>

            <main className={"ml-16 p-2 text-white"}>
                <h1 className={"text-4xl font-bold mb-8"}>{title}</h1>
                {children}
            </main>
        </div>
    );
}

export default Page;
