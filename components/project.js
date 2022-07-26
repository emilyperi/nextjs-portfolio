import { useState } from "react"
import Paragraph from "./paragraph"

export default function Project(props) {
    const [clamped, setClamped] = useState(true);
    const [showButton, setShowButon] = useState(true);
    const handleClick = () => setClamped(!clamped);

    const children = props.children;
    console.log(children);
    children.forEach(child => {
        console.log(child);
    });

    return (
        <div className="flex flex-col items-end justify-center mx-auto max-w-screen-md mt-20">
        <h1 className='text-4xl text-greybrown mb-4'>{props.title}</h1>
            <div className={clamped ? "clamp" : "long-text"}>
                {props.children}
            </div>
            {showButton && (
                <button onClick={handleClick} className="bg-greymagenta p-2 text-xlightgreymagenta font-medium rounded-sm">Read {clamped ? "more" : "less"}</button>
            )}
        </div>
    );
}