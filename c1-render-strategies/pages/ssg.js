import AppLayout from "../components/AppLayout";
import { readButtonsFromFile } from "../lib/button-utils";

export const getStaticProps = async () => {
    return {
        revalidate: 60, // Refresh every minute
        props: {
            buttons: await readButtonsFromFile(),
        },
    };
};

const SSG = ({ buttons }) => {
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
                <h1>Static Site Generation (SSG)</h1>
                <p> This page will be statically generated at build time! </p>
            </header>

            <AppLayout buttons={buttons} />
        </div>
    );
};

export default SSG;
