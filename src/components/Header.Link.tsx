import Link from "next/link";

interface Props {
    href: string;
    title: string;
    subtitle: string;
}

export default function HeaderLink(props: Props) {
    return (
        <Link href={props.href} className="flex flex-col" target="_blank">
            <strong className="text-prose-seconday text-xs">{props.title}</strong>
            <span className="text-blue-200 text-base">{props.subtitle}</span>
        </Link>
    );
}
