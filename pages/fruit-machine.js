import React, {useState} from 'react';
import Page from "../components/Page";

function FruitMachine(props) {
    // const as it doesn't change
    const options = ["🍒", "🔔", "🍈", "🍊", "⭐", "💀"]

    // this is state that is updated throughout the program, therefore it's a variable
    let [credits, setCredits] = useState(100);
    let [rolled, setRolled] = useState(["-", "-", "-"]);

    const [quit, setQuit] = useState(false);

    function roll(e) {
        e.preventDefault()

        setCredits(prev => prev - 20) // 20p per roll

        // ~~ is a substitute for Math.floor()
        setRolled([options[~~(Math.random() * options.length)], options[~~(Math.random() * options.length)], options[~~(Math.random() * options.length)]])

        // if 3 symbols are skulls, remove all credits from the user
        if (rolled.filter(roll => roll === "💀").length === 3) {
            setCredits(prev => 0)
            return
        }

        // if 2 symbols are skulls, remove 100 credits from the user
        if (rolled.filter(roll => roll === "💀").length === 2) {
            setCredits(prev => prev - 100)
            return
        }

        // if 3 symbols are bells, award the user £5
        if (rolled.filter(roll => roll === "🔔").length === 3) {
            setCredits(prev => prev + 500)
            return
        }

        // if 3 symbols are the same, award the user £1
        if (
            rolled => rolled.every(v => v === rolled[0])
        ) {
            setCredits(prev => prev + 100)
            return
        }

        // if 2 symbols are the same, award the user 50p
        if (
            rolled[0] === rolled[1] ||
            rolled[0] === rolled[2] ||
            rolled[1] === rolled[2]
        ) {
            setCredits(prev => prev + 50)
            return
        }
    }

    return (
        <Page title={"Fruit Machine"}>

            {credits < 20 &&
                <div className={"flex flex-col justify-center items-center"}>
                    <div className={"text-4xl pb-16 text-red-600"}>You lost!</div>

                    <button onClick={(e) => {
                        e.preventDefault();
                        setCredits(prev => prev + 100)
                    }} className={"bg-red-600 hover:bg-red-700 py-2 px-4 rounded"}>
                        Topup (+£1)
                    </button>
                </div>
            }

            {quit ?
                <div className={"flex flex-col justify-center items-center"}>
                    <div className={"text-4xl pb-16"}>You won £{`${credits}`}</div>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setQuit(false)
                    }} className={"bg-red-600 hover:bg-red-700 py-2 px-4 rounded"}>
                        Continue
                    </button>
                </div>
                :
                credits > 0 && <div className={"flex flex-col justify-center items-center"}>
                    <div>Credits: {credits}</div>

                    <div className={"flex flex-row gap-2 text-5xl p-8"}>{rolled.map((option, i) =>
                        <div key={i}>{option}</div>
                    )}</div>

                    <div className={"flex flex-row gap-2"}>
                        <button className={"bg-blue-600 hover:bg-blue-700 py-2 w-24 px-4 rounded"} onClick={roll}>Roll
                        </button>
                        <button className={"bg-green-600 hover:bg-green-700 py-2 w-24 px-4 rounded"} onClick={(e) => {
                            e.preventDefault();
                            setQuit(true)
                        }}>Withdraw
                        </button>
                    </div>
                </div>
            }
        </Page>
    );
}

export default FruitMachine;
