import Link from "next/link";
import PageContainer from "~/components/PageContainer";
import experiences from "~/data/experiences.json";

export default function Experiences() {
    return (
        <PageContainer title="Experiences">
            <ul className="flex flex-col gap-8">
                {experiences.map((experience) => (
                    <li key={experience.company} className="flex flex-col gap-1">
                        <div className="text-2xl text-prose-primary font-bold">{experience.company}</div>

                        <div className="text-prose-seconday font-bold">📌 {experience.position}</div>

                        <div className="text-prose-seconday font-light">
                            📅 from <strong>{experience.from}</strong> to <strong>{experience.to}</strong> (
                            {experience.duration})
                        </div>

                        {experience.linkedin && (
                            <Link href={experience.linkedin} target="_blank" className="text-blue-200 text-wrap">
                                🔗 {experience.linkedin}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </PageContainer>
    );
}
