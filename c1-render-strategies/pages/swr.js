import { SWRConfig } from 'swr';
import AppLayout from '../components/AppLayout';
import useButtonsApi from '../lib/hooks/useButtonsApi';
import { readButtonsFromFile } from '../lib/button-utils';

export const getStaticProps = async () => {
    return {
        props: {
            buttons: await readButtonsFromFile(),
        },
    };
};

const SWR = ({ buttons }) => {
    return (
        <SWRConfig
            value={{
                fallback: {
                    '/api/buttons': buttons,
                },
            }}
        >
            <App buttons={buttons} />
        </SWRConfig>
    );
};

const App = () => {
    const { buttons, isLoading} = useButtonsApi();

    console.log(buttons)
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
                <h1>stale-while-revalidate (SWR)</h1>
                <p>
                    This page will show cached data while fetching updated data
                </p>
            </header>

            {isLoading && <p>loading...</p>}
            <AppLayout key={JSON.stringify(buttons)} buttons={buttons} />
        </div>
    );
}

export default SWR;