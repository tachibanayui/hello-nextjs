import { useState } from "react";
import cx from 'classnames';
import { handleClick } from "../lib/button-utils-client";


const ClickyButton = ({ data }) => {
    const [helddown, setHelddown] = useState(false);
    const [count, setCount] = useState(0);
    const [currentAttrs, setAttrs] = useState(data);
    const { title, content, border, background, color } = currentAttrs;

    const handleMouseDown = (e) => {
        setHelddown(true);
    }

    const handleMouseUp = () => {
        setCount(old => old + 1);
        setAttrs(handleClick(data, currentAttrs, count + 1));
        setHelddown(false);
    }

    return (
        <div
            className={cx("btn-card", helddown && "btn-card-hold")}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <style jsx>{`
                .btn-card {
                    position: relative;
                    background: url("/icons8-cursor-40.svg") top 12px right
                        no-repeat ${background};
                    padding: 12px;
                    border: 2px solid ${border};
                    border-radius: 8px;
                    transition: all 0.3s;
                    transform: scale(0.99);
                }

                .btn-card * {
                    color: ${color};
                }

                .btn-card:hover {
                    box-shadow: 1px 4px 30px 1px #ffffff88;
                    transform: scale(1);
                    cursor: pointer;
                }

                .btn-card-hold:hover {
                    transform: translateY(10px);
                }

                .count {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    position: absolute;
                    right: 12px;
                    bottom: 12px;

                    border-radius: 100px;
                    background: gray;
                    font-size: 14px;
                    width: 24px;
                    height: 24px;
                }
            `}</style>
            <h1>{title}</h1>
            <p>{content}</p>
            <div className="count">{count}</div>
        </div>
    );
};

export default ClickyButton;
