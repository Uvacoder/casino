import React, {useState} from 'react';
import Page from "../components/Page";
import {useCredits} from "../context/credits";
import NoCredits from "../components/elements/NoCredits";

function FruitMachine(props) {
    // const as it doesn't change
    const options = ["🍒", "🔔", "🍈", "🍊", "⭐", "💀"]

    // this is state that is updated throughout the program, therefore it's a variable
    const {credits, setCredits} = useCredits();
    let [rolled, setRolled] = useState(["-", "-", "-"]);

    const [quit, setQuit] = useState(false);

    function roll(e) {
        e.preventDefault()

        setCredits(prev => prev - 20) // 20p per roll

        // ~~ is a substitute for Math.floor()
        setRolled([options[~~(Math.random() * options.length)], options[~~(Math.random() * options.length)], options[~~(Math.random() * options.length)]])

        console.log("rolled", rolled)

        // if 3 symbols are skulls, remove all credits.js from the user
        if (rolled.filter(roll => roll === "💀").length === 3) {
            setCredits(0)
            console.log("remove all credits")
            console.log("credits", credits)
            return
        }

        // if 2 symbols are skulls, remove 100 credits.js from the user
        if (rolled.filter(roll => roll === "💀").length === 2) {
            setCredits(prev => prev - 100)
            console.log("remove 100 credits")
            console.log("credits", credits)
            return
        }

        // if 3 symbols are bells, award the user £5
        if (rolled.filter(roll => roll === "🔔").length === 3) {
            setCredits(prev => prev + 500)
            console.log("award 500 credits")
            console.log("credits", credits)
            return
        }

        // if 3 symbols are the same, award the user £1
        if (
            rolled => rolled.every(v => v === rolled[0])
        ) {
            setCredits(prev => prev + 100)
            console.log("award 100 credits")
            console.log("credits", credits)
            return
        }

        // if 2 symbols are the same, award the user 50p
        if (
            rolled[0] === rolled[1] ||
            rolled[0] === rolled[2] ||
            rolled[1] === rolled[2]
        ) {
            setCredits(prev => prev + 50)
            console.log("award 50 credits")
            console.log("credits", credits)
            return
        }

        console.log("no change")
        console.log("credits", credits)
    }

    return (
        <Page title={"Fruit Machine"}>
            {credits < 20 &&
                <NoCredits/>
            }
            {credits > 0 && <div className={"flex flex-col justify-center items-center"}>
                <div className={"flex flex-row gap-2 text-5xl p-8"}>{rolled.map((option, i) => <div
                    key={i}>{option}</div>)}</div>

                <div className="flex flex-col gap-2">
                    <button className={"bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded transition"} onClick={roll}>Roll</button>
                    <button className={"bg-gray-300 text-black hover:bg-gray-400 py-2 px-6 rounded transition"} onClick={(e) => {
                        e.preventDefault()
                        setCredits(0)
                    }}>Remove Credits (debug)</button>
                </div>
            </div>
            }
        </Page>
    );
}

export default FruitMachine;
