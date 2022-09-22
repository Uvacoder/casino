import '../styles/tailwind.css'
import {CreditsProvider} from "../context/credits";

function Casino({Component, pageProps}) {
    return (
        <CreditsProvider>
            <Component {...pageProps} />
        </CreditsProvider>
    )
}

export default Casino;
