import React, {useState} from 'react';
import Page from "../components/Page";

function FruitMachine(props) {
    let options = ["🍒", "🔔", "🍈", "🍊", "⭐", "💀"]
    const [credits, setCredits] = useState(100);
    const [rolled, setRolled] = useState(["a", "b", "c"]);

    function roll(e) {
        e.preventDefault()
        setRolled([options[~~(Math.random() * options.length)], options[~~(Math.random() * options.length)], options[~~(Math.random() * options.length)]])
    }

    return (
        <Page>
            <div>Credits: {credits}</div>

            <div className={"flex flex-row gap-2"}>{rolled.map((option) => <div>{option}</div>)}</div>

            <button onClick={roll}>Roll</button>
        </Page>
    );
}

export default FruitMachine;
