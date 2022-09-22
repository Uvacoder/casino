import {useState} from 'react';
import Page from "../components/Page";
import {useCredits} from "../context/credits";
import {useRouter} from "next/router"

function Withdraw(props) {
    let {credits, setCredits} = useCredits()
    let [withdrawn, setWithdrawn] = useState(0)
    let router = useRouter()

    return (
        <Page title={"Withdraw"}>
            <div className={"flex flex-col justify-center items-center pt-8"}>
                {withdrawn ?
                    <>
                        <div className={"text-4xl pb-8"}>You withdrew £{`${withdrawn / 100}`}</div>
                        <button onClick={(e) => {
                            e.preventDefault();
                            setCredits(100)
                            router.back()
                        }} className={"bg-red-600 hover:bg-red-700 py-2 px-4 rounded"}>
                            Continue
                        </button>
                    </>
                    :
                    <>
                        <div className={"text-4xl pb-8"}>
                            You currently hold £{credits / 100}.
                        </div>
                        <div className={"flex flex-row gap-2"}>
                            <button onClick={(e) => {
                                e.preventDefault();
                                setWithdrawn(credits)
                                setCredits(0)
                            }} className={"bg-green-600 hover:bg-green-700 py-2 px-4 rounded"}>
                                Withdraw
                            </button>
                            <button onClick={(e) => {
                                e.preventDefault();
                                router.back()
                            }} className={"bg-red-600 hover:bg-red-700 py-2 px-4 rounded"}>
                                Return
                            </button>
                        </div>
                    </>
                }
            </div>
        </Page>
    )
}

export default Withdraw
