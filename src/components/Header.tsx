import Image from "next/image";
import HeaderLink from "~/components/Header.Link";

export default function Header() {
    return (
        <header className="h-fit lg:sticky top-4 bg-background-secondary border border-border-primary rounded-4xl p-8 flex flex-col">
            <div className="flex flex-col items-center text-center md:flex-row md:gap-4 md:text-start lg:flex-col lg:items-center lg:gap-2">
                <Image src="/images/avatar.jpg" alt="avatar" width={100} height={100} className="rounded-xl lg:mx-auto" />
                <div className="flex flex-col justify-end lg:justify-center lg:items-center lg:gap-2">
                    <h1 className="mt-4 text-2xl font-bold text-nowrap text-brand">Parham Hoseyni</h1>
                    <h2 className="text-nowrap font-thin">Web Developer</h2>
                </div>
            </div>

            <div className="my-4 border border-border-primary w-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                <HeaderLink href="tel:+989154847176" title="Mobile" subtitle="+98 915 484 7176" />

                <HeaderLink href="mailto:prhmhoseyni@gmail.com" title="Email" subtitle="prhmhoseyni@gmail.com" />

                <HeaderLink href="https://www.linkedin.com/in/prhmhoseyni" title="Linkedin" subtitle="in/prhmhoseyni" />

                <HeaderLink href="https://github.com/prhmhoseyni" title="Github" subtitle="github/prhmhoseyni" />
            </div>
        </header>
    );
}
