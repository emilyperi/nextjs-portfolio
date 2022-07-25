import Paragraph from "./paragraph"

export default function Project(props) {
    return (
        <div className="w-full flex flex-col justify-center mt-8">
            <h2 className="text-4xl text-greybrown mb-4 hover:text-lightgreybrown cursor-pointer"><a href={props.href}>{props.title}</a></h2>
            <Paragraph>{props.description}</Paragraph>
        </div>
    )
}