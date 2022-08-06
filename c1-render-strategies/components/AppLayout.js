import { useState } from "react";
import ClickyButton from "./ClickyButton";

const AppLayout = ({ buttons }) => {
    const [btns, setBtns] = useState(buttons.map(x => ({ ...x })));
    const [select, setSelect] = useState(btns[0]?.title);
    
    const handleClick = () => {
        const newBtn = buttons.find((x) => x.title === select);
        newBtn && setBtns([...btns, { ...newBtn }]);
    }


    return (
        <div>
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
                    gap: 16px;
                }

                .create {
                    padding: 4px;
                    text-align: right;
                }
            `}</style>

            <h1>Clicky-wicky Buttons</h1>
            <p>Click it!...</p>
            <div className="container">
                {btns.map((x, i) => (
                    <ClickyButton key={i + +new Date()} data={x} />
                ))}
            </div>

            <div className="create">
                <span>Create button: </span>
                <select
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}
                >
                    {btns.map(({ title }, i) => (
                        <option key={i}>{title}</option>
                    ))}
                </select>
                <button onClick={handleClick}>Create!</button>
            </div>
        </div>
    );
};

export default AppLayout;
