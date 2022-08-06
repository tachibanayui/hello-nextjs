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
            <AppLayout buttons={buttons} />
    );
};

export default SSG;
