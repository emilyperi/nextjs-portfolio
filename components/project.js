import { useState } from "react"
import Paragraph from "./paragraph"

export default function Project(props) {
    const [clamped, setClamped] = useState(true);
    const [showButton, setShowButon] = useState(true);
    const handleClick = () => setClamped(!clamped);

    return (
        <div className="flex flex-col items-start mx-auto w-full mt-18 mb-10">
        <h1 id={props.id} className='text-4xl text-greybrown mb-4'>{props.title}</h1>
            <div className={clamped ? "clamp" : "long-text"}>
                {props.children}
            </div>
            <div className="flex w-full justify-end">
            {showButton && (
                <button onClick={handleClick} className="bg-greymagenta p-2 text-xlightgreymagenta font-medium rounded-sm">Read {clamped ? "more" : "less"}</button>
            )}
            </div>
        </div>
    );
}