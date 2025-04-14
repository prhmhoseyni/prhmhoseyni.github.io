import PageContainer from "~/components/PageContainer";
import skills from "~/data/skills.json";

export default function Skills() {
    return (
        <PageContainer title="Skills">
            <ul className="flex flex-col gap-8">
                {skills.map((skill) => (
                    <li key={skill.title} className="flex flex-col gap-2">
                        <div className="text-prose-primary text-lg">📌 {skill.title}</div>
                        <div className="text-prose-seconday leading-8">{skill.items.join(", ")}.</div>
                    </li>
                ))}
            </ul>
        </PageContainer>
    );
}
