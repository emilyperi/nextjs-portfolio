import { useState } from "react"
import Paragraph from "./paragraph"

export default function Project(props) {
    const [clamped, setClamped] = useState(true);
    const [showButton, setShowButon] = useState(true);
    const handleClick = () => setClamped(!clamped);
    const firstChild = Array.isArray(props.children) ? props.children[0] : props.children;

    return (
        <div className="flex flex-col items-start mx-auto w-full mb-10">
        <h1 id={props.id} className='text-4xl text-greybrown mb-4 scroll-mt-24'>{props.title}</h1>
            {clamped && firstChild
            ? <div className="clamp">{firstChild}</div>
            : <div> {props.children} </div>
            }         
            <div className="flex w-full justify-end mt-6">
            {showButton && (
                <button onClick={handleClick} className="bg-greymagenta p-2 text-xlightgreymagenta font-medium rounded-sm">Read {clamped ? "more..." : "less"}</button>
            )}
            </div>
        </div>
    );
}