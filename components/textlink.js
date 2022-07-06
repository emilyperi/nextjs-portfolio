export default function TextLink(props) {
    return ( 
        <a href={props.href} className="underline hover:text-lightgreybrown">{props.children}</a>
    );
}