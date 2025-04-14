import PageContainer from "~/components/PageContainer";

export default function Home() {
    return (
        <PageContainer title="About Me" className="text-xl leading-9 font-normal text-prose-seconday">
            <strong className="text-prose-primary">Frontend Developer</strong> with{" "}
            <strong className="text-prose-primary">4+ years of experience</strong> in{" "}
            <strong className="text-prose-primary">architecting</strong>,{" "}
            <strong className="text-prose-primary">designing</strong> and developing web applications using{" "}
            <strong className="text-prose-primary">React.js</strong>, <strong className="text-prose-primary">Next.js</strong>{" "}
            and <strong className="text-prose-primary">TypeScript</strong>. My main focus is JavaScript. Passionate about
            building <strong className="text-prose-primary">scalable</strong>,{" "}
            <strong className="text-prose-primary">high-quality</strong> solutions while maintaining{" "}
            <strong className="text-prose-primary">clean code</strong>.
            <br />
            Passionate about solving product-related challenges, with experience in UX research and product design.
            <br />I am: <strong className="text-prose-primary">problem solver.</strong>{" "}
            <strong className="text-prose-primary">details oriented.</strong>
            <strong className="text-prose-primary">design thinking in problem-solving.</strong>{" "}
            <strong className="text-prose-primary">resourceful.</strong>
        </PageContainer>
    );
}
