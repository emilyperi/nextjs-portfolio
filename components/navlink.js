import Link from 'next/link';

export default function NavLink(props) {
    return (
        <Link href={props.href}>
            <div className={props.className}>
                <a>{props.children}</a>
            </div>
        </Link>
    );
}
