import type { PropsWithChildren } from "react";

interface Props {
    title: string;
    className?: string;
}

export default function PageContainer(props: PropsWithChildren<Props>) {
    return (
        <section className="flex flex-col gap-16 p-8 lg:-mt-20">
            <h2 className="w-fit font-bold text-4xl relative before:absolute before:-bottom-2 before:h-1 before:w-10 before:bg-brand before:rounded-2xl">
                {props.title}
            </h2>

            <main className={props.className}>{props.children}</main>
        </section>
    );
}
