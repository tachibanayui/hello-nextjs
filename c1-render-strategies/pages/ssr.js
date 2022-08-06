import AppLayout from "../components/AppLayout";
import { readButtonsFromFile } from "../lib/button-utils";

export const getServerSideProps = async () => {
    return {
        props: {
            buttons: await readButtonsFromFile(),
        },
    };
};

const SSR = ({ buttons }) => {
    return (
        <div>
            <style jsx>{`
                .header {
                    text-align: center;
                    border-bottom: 1px solid red;
                    background: #ffd70088;
                }
            `}</style>

            <header className="header">
                <h1>Server-Side Generation (SSR)</h1>
                <p> This page will be generated on each request </p>
            </header>

            <AppLayout buttons={buttons} />
        </div>
    );
};

export default SSR;
