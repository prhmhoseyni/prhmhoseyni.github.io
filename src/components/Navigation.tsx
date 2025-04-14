"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav
            className={[
                "fixed bottom-0 inset-x-4 z-10 p-2 border border-border-primary rounded-t-4xl bg-linear-to-br from-[#3f3f40] to-[#303030]",
                "lg:static lg:flex lg:justify-end lg:w-fit lg:ms-auto lg:p-4 lg:border-b lg:border-l lg:border-t-0 lg:border-r-0 lg:border-border-primary lg:rounded-bl-4xl lg:rounded-tr-4xl lg:rounded-tl-none",
            ].join(" ")}
        >
            <ul className="flex items-center justify-center gap-2">
                <li className="font-bold text-sm lg:text-base p-2 lg:px-4">
                    <Link href="/" className={pathname === "/" ? "text-brand" : ""}>
                        Home
                    </Link>
                </li>

                <li className="font-bold text-sm lg:text-base p-2 lg:px-4">
                    <Link href="/skills" className={pathname === "/skills" ? "text-brand" : ""}>
                        Skills
                    </Link>
                </li>

                <li className="font-bold text-sm lg:text-base p-2 lg:px-4">
                    <Link href="/projects" className={pathname === "/projects" ? "text-brand" : ""}>
                        Projects
                    </Link>
                </li>

                <li className="font-bold text-sm lg:text-base p-2 lg:px-4">
                    <Link href="/experiences" className={pathname === "/experiences" ? "text-brand" : ""}>
                        Experiences
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
