import React from 'react';
import {useCredits} from "../../context/credits";

function NoCredits(props) {
    let {credits, setCredits} = useCredits()

    return (
        <div className={"flex flex-col justify-center items-center pt-8"}>
            <div className={"text-4xl pb-8 text-red-600"}>You lost!</div>

            <button onClick={(e) => {
                e.preventDefault();
                setCredits(prev => prev + 100)
            }} className={"bg-red-600 hover:bg-red-700 py-2 px-4 rounded"}>
                Topup (+£1)
            </button>
        </div>
    );
}

export default NoCredits;
